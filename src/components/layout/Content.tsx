import { Flex } from "@chakra-ui/react"

interface ContentProps {
    children: JSX.Element
}

const Content = ({ children }: ContentProps) => {
    return (
        <Flex 
            flexDirection='column'
            marginLeft='auto'
            marginTop='120px'
            padding='0 35px'>
                <main>
                    { children }
                </main>
        </Flex>
    )
}

export default Content