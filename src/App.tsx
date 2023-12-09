import './App.css'
import Foter from './shared/footer/footer'
import SearchAppBar from './shared/nvar/nvar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2b5aa2',
        light: '#2b5aa2',
        dark: '#213765',
        contrastText: '#FFFFFF',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Foter />
      </ThemeProvider>

    </>
  );
}

export default App
