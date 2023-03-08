import { existsSync, symlinkSync, unlinkSync } from 'fs' 

const pluginName = 'te-themes:plugin'

const sharedFolderPath = 'src/shared'
const sharedMappings = [
    ['../node_modules/te-themes/src/shared/themes', sharedFolderPath],
]
    
export const addThemes = () => {
    // Remove shared folder if exists  
    if (existsSync(sharedFolderPath)) {
        console.info(`Removing file "${sharedFolderPath}"...`)
        unlinkSync(sharedFolderPath)
        console.info('File removed!')
    }
    
    sharedMappings.forEach((map) => { 
        const path1 = map[0]
        const path2 = map[1]
        
        try {
            console.info(`Creating symlink "${path1}" -> "${path2}"...`) 
            symlinkSync(path1, path2)
            console.info('Symlink created!')
        } catch (e) { 
            console.error(`Could not create symlink for mapping "${path1}" -> "${path2}" because of error`, e) 
            if (e instanceof Error) {
                const errorCode = (e as any).code
                if (errorCode === 'EEXIST') {
                    // Ignore this type of error (file already exists)          
                    console.info('Ignore this error.')
                    return
                } 
            }

            throw e
        }
    })
    
    return { name: pluginName, enforce: 'pre' } as const
}