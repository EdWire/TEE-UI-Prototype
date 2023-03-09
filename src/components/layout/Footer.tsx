import { Flex, Text } from "@chakra-ui/react"

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto' }}>
            <Flex 
                bg='blue.900' 
                w='full'
                justifyContent='center'
                textColor='white'
                padding='10'>
                    <Text>SPA prototype</Text>
            </Flex>
        </footer>
    )
}

export default Footer