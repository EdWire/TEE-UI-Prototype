import {
    Icon,
    Box,
    ModalCloseButton,
    ModalContent,
    Stack,
    Text,
    Button,
    ModalBody,
  } from '@chakra-ui/react'
  
const InformationModal = () => {
    return (
        <ModalContent>
            <ModalBody>
                <Icon>
                <Box
                borderRadius="3px"
                width="500px"
                height="211px"
                maxWidth="100%"
                background="The Exchange Color Palette.Black & White/White" />
                <ModalCloseButton size="md" width="32px" height="32px" />
                <Stack
                direction="column"
                justify="flex-start"
                align="flex-start"
                spacing="35px"
                >
                <Stack
                    direction="column"
                    justify="flex-start"
                    align="flex-start"
                    spacing="5px"
                >
                    <Text
                    fontFamily="Poppins"
                    lineHeight="1.33"
                    fontWeight="semibold"
                    fontSize="24px"
                    color="#000000"
                    width="429px"
                    maxWidth="100%"
                    >
                    Informational Modal Title
                    </Text>
                    <Text
                    fontFamily="Open Sans"
                    lineHeight="1.38"
                    fontWeight="regular"
                    fontSize="16px"
                    color="#000000"
                    width="429px"
                    maxWidth="100%"
                    >
                    Informational modal information blurb. Lorem ipsum dolor sit amet.{' '}
                    </Text>
                </Stack>
                <Stack
                    direction="row"
                    justify="flex-start"
                    align="flex-start"
                    spacing="8px"
                >
                    <Button size="sm" variant="outline" colorScheme="dark gray dim">
                    Button
                    </Button>
                    <Button size="sm" variant="solid" colorScheme="dark gray">
                    Button
                    </Button>
                </Stack>
                </Stack>
                </Icon>
            </ModalBody>
        </ModalContent>
    )
}
  
export default InformationModal