import { Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react"
import NotificationsPopover from "../common/NotificationsPopover"

const TopBarInfo = () => {
    return (
        <Flex alignItems='center'>
            <Text marginRight='12px'>User Name</Text>
            <NotificationsPopover />
            <Popover>
                <PopoverTrigger>
                    <Button bg='white' border='1px'>Logout</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    )
}

export default TopBarInfo