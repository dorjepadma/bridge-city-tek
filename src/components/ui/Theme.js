import { createTheme } from '@mui/material/styles';

 const theme = createTheme({
  palette: {
    primary: {
      main: '#0f52ba',
    },
    secondary: {
      main: '#32cd32',
    },
    third: {
      main: '#FF7F50',
    },
  },
  paper: {
    backgroundColor: '#0398dc', 
  },
  typography: {
    fontFamily: 'Times New Roman, Raleway',
    fontSize: 15,
    h1: { // incase h1 needs to have a separate fontFamily 
      fontFamily: 'Roboto',
      fontWeight: 15,
    },
    h3:{
      fontWeight: 300,
      fontSize: 21,
    }},
    menu: {
      backgroundColor: '#0398dc',
    },
  });

export default createTheme(theme)




