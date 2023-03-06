import {
    Icon,
    Box,
    Text,
    ModalCloseButton,
    Stack,
    Button,
  } from '@chakra-ui/react'
  
const ConfirmationModal = () => (
    <Icon>
      <Box>
        <Box
          borderRadius="3px"
          width="500px"
          height="211px"
          maxWidth="100%"
          background="The Exchange Color Palette.Black & White/White"
        />
        <Text
          fontFamily="Poppins"
          lineHeight="1.33"
          fontWeight="semibold"
          fontSize="24px"
          color="#000000"
          width="429px"
          maxWidth="100%"
        >
          Confirmation Modal Title
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
          Confirmation modal information blurb. Lorem ipsum dolor sit amet.{' '}
        </Text>
        <ModalCloseButton size="md" width="32px" height="32px" />
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="8px"
        >
          <Button size="sm" variant="outline" colorScheme="blue">
            Button
          </Button>
          <Button size="sm" variant="solid" colorScheme="blue">
            Button
          </Button>
        </Stack>
      </Box>
    </Icon>
  )
  
export default ConfirmationModal