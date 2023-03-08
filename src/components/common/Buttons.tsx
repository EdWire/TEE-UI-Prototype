import { Stack, Button } from '@chakra-ui/react'
import { ReactIcon } from '@chakra-ui/icons'

export const Buttons = () => {
    return (
        <Stack
            padding="10px"
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing="10px">
                <Button
                leftIcon={<ReactIcon data-icon="CkReact" />}
                rightIcon={<ReactIcon data-icon="CkReact" />}
                size="lg"
                variant="solid"
                colorScheme="blue">
                    Button 1
            </Button>
            <Button
                    leftIcon={<ReactIcon data-icon="CkReact" />}
                    rightIcon={<ReactIcon data-icon="CkReact" />}
                    size="lg"
                    variant="solid"
                    colorScheme="green">
                    Button 2
                </Button>
        </Stack>
        
    )
}

export default Buttons
