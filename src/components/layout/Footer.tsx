import { Flex, Text } from "@chakra-ui/react"

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto' }}>
            <Flex 
                bg='blackAlpha.700' 
                justifyContent='center'
                textColor='white'
                padding='5'>
                    <Text>SPA prototype</Text>
            </Flex>
        </footer>
    )
}

export default Footer