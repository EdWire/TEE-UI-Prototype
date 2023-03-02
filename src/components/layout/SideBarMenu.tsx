import { Flex, Link, Text } from "@chakra-ui/react"

const SideBarMenu = () => {
    const menuList: string[] = ['Option 1', 'Option 2', 'Option 3']

    return (
        <Flex 
            flexDirection='column'
            borderColor='red'
            borderBottom='1px'>
                {menuList.map((item, key) => 
                    <Link 
                        borderColor='red'
                        padding='10px 15px'
                        borderTop='1px'
                        _hover={{ bg: 'lightgray' }}
                        key={key}>
                            <Text fontWeight='bold'>{ item }</Text>
                    </Link>
                )}
        </Flex>
    )
}

export default SideBarMenu