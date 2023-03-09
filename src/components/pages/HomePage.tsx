import { Flex, Text, Heading, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import routes from "../../core/routes"

const HomePage = () => {
    return (    
        <Flex flexDirection='column'>
            <Heading>Home Page</Heading>
            <Link as={RouterLink} to={routes.customers.url}>{routes.customers.name}</Link>
            <Text marginTop='30px'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo repellendus in, impedit doloremque, sapiente possimus corporis placeat nulla quos maxime ullam deleniti officia atque accusamus. Veritatis molestiae libero voluptatem unde.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, deleniti numquam magnam laborum nesciunt iusto, accusamus et fuga dolore necessitatibus beatae accusantium adipisci eos itaque? Placeat molestiae tempore unde reiciendis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto molestiae corrupti voluptatum perferendis repudiandae tempore ut eum minus ipsa aliquam, nobis laudantium natus iusto delectus nostrum nisi consequatur dicta.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsam nobis dolor quae natus deleniti facilis magni voluptate saepe eligendi a at in soluta facere unde, vitae id cumque. Provident.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quod eius. Voluptate quia error natus necessitatibus beatae repellendus laudantium! Doloribus magnam minima corporis laborum aut in voluptatum obcaecati rem pariatur?
            </Text>
            <Text marginTop='15px'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, exercitationem, facilis velit architecto quasi inventore nemo placeat aliquam distinctio, reprehenderit atque! Ad eos ea, recusandae reiciendis in iste dolores consequuntur!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae molestiae rerum dolorum ullam. Quasi illum saepe tenetur laudantium explicabo suscipit nemo vero, amet veniam aperiam in nam ipsum? Ex, fuga!
            </Text>
        </Flex>
    )
}

export default HomePage