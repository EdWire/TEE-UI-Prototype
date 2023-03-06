import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import routes from "../../core/routes"
import ToggleModeBtn from "../common/ToggleModeBtn"

const HomePage = () => {
    return (    
        <Flex flexDirection='column'>
            <Heading>Home Page</Heading>
            <Link as={RouterLink} to={routes.customers.url}>{routes.customers.name}</Link>
            <Text marginTop='50px' marginBottom='50px'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum unde repellendus consequatur porro officia aut assumenda laboriosam libero delectus, quia dolore quas, facilis ipsa laborum perspiciatis exercitationem officiis ad!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis quam reprehenderit voluptatem. Laborum iste rerum earum perferendis dolores tempore, nostrum natus fugit provident officiis, atque suscipit ea labore? Tempore!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, provident a. Cumque dolorum odit excepturi, tempora laborum error nam at recusandae vero ullam possimus. Aut sit sed in minima temporibus?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sapiente ab vero magni. Vel placeat inventore ea aut incidunt aliquid perspiciatis, expedita a veniam. Vero suscipit earum itaque quo ipsum?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero iste vitae aspernatur ipsam soluta nobis, eos dignissimos beatae ea fugiat, dolores alias quis veritatis! Iusto obcaecati quod dolor incidunt doloribus!
            </Text>
            <Button size='md' variant='outline'>Hola</Button>
            <ToggleModeBtn />
        </Flex>
    )
}

export default HomePage