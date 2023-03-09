import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Layout from './components/layout/Layout'
import baseTheme from './shared/themes/baseTheme'

const activeTheme = baseTheme

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <ColorModeScript initialColorMode={activeTheme.config.initialColorMode} />
            <ChakraProvider theme={activeTheme}>
              <Layout />
            </ChakraProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;