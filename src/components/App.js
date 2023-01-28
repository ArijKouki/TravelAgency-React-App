import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Services from './Services';
import Products from './Products';
import Home from './Home';
import Signup from './Signup';
import {ThemeProvider,createTheme} from '@mui/material'
import Footer from './Footer';
import Herosection from './Herosection';

function App() {
  const darkTheme=createTheme(
    {
      palette:{
        primary:{
          main:"#000000",
          light:"#333333",
          dark:"#000000",
          contrastText:"#FFFFFF"
        },
        secondary:{
          main:"#FFFFFF",
          light:"#FFFFFF",
          dark:"#FFFFFF",
          contrastText:"#000000"
        }
      }
    }
  )
  return (
    <ThemeProvider theme={darkTheme}>
    <React.Fragment>
      <Navbar/>

      {/* <Herosection/> */}

      <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/services' element={< Services />}></Route>
                 <Route exact path='/products' element={< Products />}></Route>
                 <Route exact path='/signup' element={< Signup />}></Route>
      </Routes>
      <Footer/>
    </React.Fragment>
    </ThemeProvider>

  );
}

export default App;
