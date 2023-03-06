import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import lightTheme from './themes/light'
import Layout from './components/layout/Layout'

const activeTheme = lightTheme

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <ChakraProvider theme={activeTheme}>
              <ColorModeScript initialColorMode={activeTheme.config.initialColorMode} />
              <Layout />
            </ChakraProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;