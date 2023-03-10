import { Flex } from "@chakra-ui/react"
import TopBarBrand from "./TopBarBrand"
import TopBarInfo from "./TopBarInfo"

const TopBar = () => {
    return (
        <Flex 
            bg='blue.200'
            alignItems='center'
            position='fixed'
            shadow='0 0 2px gray'
            h='65px'
            w="100%">
                <Flex 
                    justifyContent='space-between'
                    alignItems='center'
                    padding='10px 0'
                    margin='auto'
                    width="90%">
                        <TopBarBrand />
                        <TopBarInfo />
                </Flex>
        </Flex>
    )
}

export default TopBar 