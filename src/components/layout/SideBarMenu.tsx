import { Flex, Link, Text } from "@chakra-ui/react"

const SideBarMenu = () => {
    const menuList: string[] = ['Option 1', 'Option 2', 'Option 3']

    return (
        <Flex 
            flexDirection='column'
            marginTop='15px'
            justifyContent='center'>
                {menuList.map((item, key) => 
                    <Link 
                        display='flex'
                        justifyContent='center'
                        textDecor='none'
                        padding='10px 15px'
                        border='2px'
                        borderColor='blue.800'
                        color='blue.800'
                        _hover={{ 
                            bg: 'orange.500', 
                            color: 'white',
                            borderColor: 'orange.500'
                        }}
                        key={key}>
                            <Text fontWeight='bold'>{ item }</Text>
                    </Link>
                )}
        </Flex>
    )
}

export default SideBarMenu