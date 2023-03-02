import { BellIcon } from "@chakra-ui/icons"
import { Button, Flex, Link, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react"

const NotificationsPopover = () => {
    const notificationsList: string[] = [
        "item 1",
        "item 2",
        "item 3"
    ]

    return (
        <Flex marginRight='12px'>
            <Popover>
                <PopoverTrigger>
                    <Button 
                        bg='white'
                        height='20px'
                        width='20px'>    
                            <BellIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader>Notifications</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        <Flex flexDirection='column'>
                            {notificationsList.map((item, key) => 
                                <Link 
                                    _hover={{ bg: 'lightgray' }}
                                    key={key}>
                                        {item}
                                </Link>
                            )}
                        </Flex>
                    </PopoverBody>
                </PopoverContent>
                </Popover>
        </Flex>
    )
}

export default NotificationsPopover