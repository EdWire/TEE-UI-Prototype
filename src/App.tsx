import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Layout from './components/layout/Layout';

const colors = {
  brand: {
    900: '#024fc9',
    800: '#146af5',
    500: '#4287f5'
  }
}

const overrides = extendTheme({
  colors,
  styles: {
    colors: colors
  }
})

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <ChakraProvider theme={overrides}>
                <Layout />
            </ChakraProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
