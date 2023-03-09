import { Flex } from "@chakra-ui/react"

interface ContentProps {
    children: JSX.Element
}

const Content = ({ children }: ContentProps) => {
    return (
        <Flex 
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            marginTop='120px'
            maxW='60%'
            margin='120px auto 120px auto'
            padding='0 35px'>
                <main>
                    { children }
                </main>
        </Flex>
    )
}

export default Content