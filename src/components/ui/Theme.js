import { createTheme } from '@mui/material/styles';

 const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#32cd32',
    },
    third: {
      main: '#FF7F50',
    },
  },
  paper: {
    backgroundColor: 'black', 
  },
  typography: {
    fontFamily: 'Times New Roman, Raleway',
    fontColor: '#000000',
    color: 'black',
    h1: { // incase h1 needs to have a separate fontFamily 
      fontFamily: 'Roboto',
      fontWeight: 15,
    },
    h3:{
      fontWeight: 300,
      fontSize: 21,
    }},
    menu: {
      backgroundColor: '#ffffff',
      fontColor: '#000000',
    },
  });

export default createTheme(theme)




