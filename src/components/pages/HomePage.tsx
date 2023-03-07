import { Button, Flex, Heading, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import routes from "../../core/routes"
import ToggleModeBtn from "../common/ToggleModeBtn"
import { MagicButton } from 'te-testdef'

const HomePage = () => {
    return (    
        <Flex flexDirection='column'>
            <Heading>Home Page</Heading>
            <Link as={RouterLink} to={routes.customers.url}>{routes.customers.name}</Link>
            <MagicButton name="Super great!" />
            <Button size='md' variant='outline'>Hola</Button>
            <ToggleModeBtn />
        </Flex>
    )
}

export default HomePage