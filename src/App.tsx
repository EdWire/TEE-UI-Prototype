import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/layout/Layout'

// <ColorModeScript initialColorMode={activeTheme.config.initialColorMode} />

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <ChakraProvider>
              <Layout />
            </ChakraProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;