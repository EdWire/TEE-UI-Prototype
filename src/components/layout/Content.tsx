import { Flex } from "@chakra-ui/react"
import FigmaComponent from '../common/FigmaComponent'

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
                    <FigmaComponent />
                </main>
        </Flex>
    )
}

export default Content