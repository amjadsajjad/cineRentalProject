
import { useReducer, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieList from './components/movie/MovieList'
import SideBar from './components/SideBar'
import { MovieContex, ThemeContex } from './contex/contex'
import { initialState, reducer } from './reduce/reduce'

function App() {

  // const [cartData, setCartData] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showDark, setShowDark] = useState(true);



  return (
    <>
      <ThemeContex.Provider value={{ showDark, setShowDark }}>
        <MovieContex.Provider value={{ state,dispatch }}>
          <div className={`w-full h-full ${showDark ? 'dark' : ""}`}>
            <Header></Header>
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <SideBar></SideBar>
                <MovieList></MovieList>

              </div>
            </main>
            <Footer></Footer>
          </div>
        </MovieContex.Provider>
      </ThemeContex.Provider>





    </>
  )
}

export default App
