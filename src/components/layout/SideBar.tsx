import { Flex } from "@chakra-ui/react"
import SideBarMenu from "./SideBarMenu"

const SideBar = () => {
    return (
        <Flex 
            flexDirection='column'
            position='fixed'
            bg='white'
            minH='100vh'
            w='120px'
            top='65px'
            boxShadow="0 0 1px gray"
            zIndex='2'>
                <SideBarMenu />
        </Flex>
    )
}

export default SideBar