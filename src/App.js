import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Create from './pages/Create';
import Note from './pages/Note';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#893dff',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
        <Routes>
          <Route exact path='/' element={<Note />}></Route>
          <Route path='/create' element={<Create />}></Route>
        </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
