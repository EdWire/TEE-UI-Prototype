import { Flex, Heading, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import routes from "../../core/routes"
import ToggleModeBtn from "../common/ToggleModeBtn"

const HomePage = () => {
    return (    
        <Flex flexDirection='column'>
            <Heading>Home Page</Heading>
            <Link as={RouterLink} to={routes.customers.url}>{routes.customers.name}</Link>
            <ToggleModeBtn />
            
        </Flex>
    )
}

export default HomePage