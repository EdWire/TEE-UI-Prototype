import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, useColorMode } from "@chakra-ui/react"

const ToggleModeBtn = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Button onClick={() => toggleColorMode()}>
            { colorMode === 'light'? <MoonIcon /> : <SunIcon /> }
        </Button>
    )
}

export default ToggleModeBtn