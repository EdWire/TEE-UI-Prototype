import { Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react"
import NotificationsPopover from "../common/NotificationsPopover"
import ToggleModeBtn from "../common/ToggleModeBtn"

const TopBarInfo = () => {
    return (
        <Flex alignItems='center'>
            <Text marginRight='12px'>User Name</Text>
            <Flex marginRight='12px'>
                <ToggleModeBtn />
            </Flex>
            <NotificationsPopover />
            <Popover>
                <PopoverTrigger>
                    <Button>Logout</Button>
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