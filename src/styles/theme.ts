import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {

  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  } 
})