import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import colors from "./colors";
import buttonStylesConf from "./components/buttonStylesConf";
import styles from "./styles";

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const lightTheme = extendTheme({
    config,
    colors,
    styles,
    components: {
        Button: buttonStylesConf
    }
})

export default lightTheme