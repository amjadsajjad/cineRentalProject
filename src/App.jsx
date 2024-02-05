
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieList from './components/movie/MovieList'
import SideBar from './components/SideBar'

function App() {


  return (
    <>


      <Header></Header>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar></SideBar>
          <MovieList></MovieList>

        </div>
      </main>
      <Footer></Footer>


    </>
  )
}

export default App
