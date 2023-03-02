import { Flex } from "@chakra-ui/react"
import SideBarMenu from "./SideBarMenu"

const SideBar = () => {
    return (
        <>
            <Flex 
                flexDirection='column'
                bg='white'
                position='fixed'
                minH='100vh'
                maxW='300px'
                top='80px'
                boxShadow="0 0 2px gray"
                width='25%'
                zIndex='2'>
                    <SideBarMenu />
            </Flex>
            <Flex
                minH='100vh'
                maxW='300px'
                marginTop='80px'
                width='25%'
                zIndex='1'/>
        </>
    )
}

export default SideBar