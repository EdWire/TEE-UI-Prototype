import { Flex } from "@chakra-ui/react"
import AppRouter from "../routes/AppRouter"
import Content from "./Content"
import Footer from "./Footer"
import SideBar from "./SideBar"
import TopBar from "./TopBar"

const Layout = () => {
    return (
        <Flex 
            flexDirection='column' 
            position='relative'
            minH='100vh'
            width='100%'>
                <TopBar/>
                <Flex w="full" minH='100vh'>
                    <SideBar />
                    <Flex w='full' flexDirection='column' justifyContent='center'>
                        <Content>
                            <AppRouter />
                        </Content>
                        <Footer />
                    </Flex>
                </Flex>
        </Flex>
    )
}

export default Layout