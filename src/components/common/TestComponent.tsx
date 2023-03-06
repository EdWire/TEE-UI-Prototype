import {
    Modal,
    Box,
    ModalCloseButton,
    Stack,
    Text,
    Button,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from '@chakra-ui/react'
import InformationModal from './InformationModal'
  
const TestComponent = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen}>
                <Box
                    borderRadius="3px"
                    width="500px"
                    height="211px"
                    maxWidth="100%"
                    background="The Exchange Color Palette.Black & White/White" />
                <ModalCloseButton size="md" />
                <Stack justify="flex-start" align="flex-start" spacing="35px">
                    <Stack justify="flex-start" align="flex-start" spacing="5px">
                    <Text
                        fontFamily="Poppins"
                        lineHeight="1.33"
                        fontWeight="semibold"
                        fontSize="24px"
                        color="#000000"
                        width="429px"
                        maxWidth="100%">
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
                    <Stack direction="row" justify="flex-start" align="flex-start">
                    <Button size="sm" variant="outline" colorScheme="dark gray dim">
                        Button
                    </Button>
                    <Button size="sm" colorScheme="dark gray">
                        Button
                    </Button>
                    </Stack>
                </Stack>
            </Modal>

            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <InformationModal />
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Box
                    borderRadius="3px"
                    width="500px"
                    height="211px"
                    maxWidth="100%"
                    background="The Exchange Color Palette.Black & White/White" />
                    <Stack justify="flex-start" align="flex-start" spacing="35px">
                        <Stack justify="flex-start" align="flex-start" spacing="5px">
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
                            maxWidth="100%">
                                Informational modal information blurb. Lorem ipsum dolor sit amet.{' '}
                        </Text>
                        </Stack>
                        <Stack direction="row" justify="flex-start" align="flex-start">
                        <Button onClick={onClose} size="sm" variant="outline" colorScheme="dark gray dim">
                            Button
                        </Button>
                        <Button size="sm" colorScheme="dark gray">
                            Button
                        </Button>
                        </Stack>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default TestComponent