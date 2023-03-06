import { Stack, Box } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const Navbar = () => (
  <Stack width="1500px" height="48px" maxWidth="100%">
    <Box width="1500px" height="48px" maxWidth="100%" background="#C2E5F0" />
    <Box>
      <Box width="1500px" height="48px" maxWidth="100%" background="#C2E5F0" />
      <Box>
        <Stack width="64px" height="97px">
          <Stack width="302.41px" height="58.59px" maxWidth="100%">
            <Box />
          </Stack>
        </Stack>
      </Box>
    </Box>
    <HamburgerIcon data-icon="CkHamburger" />
  </Stack>
)
