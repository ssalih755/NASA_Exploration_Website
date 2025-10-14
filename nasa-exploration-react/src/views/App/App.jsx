import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomeView from '.././Home/HomeView'
import AboutView from '.././About/AboutView'
import JokeView from '.././Joke/JokeView'
import NasaCollectionView from '.././NasaCollection/NasaCollectionView'
import NearEarthObjectsView from '.././NearEarthObjects/NearEarthObjectsView'

function App() {


  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>  | 
        <Link to='/about'> About</Link>  | 
        <Link to='/joke'> Joke</Link>  | 
        <Link to='/nasacollection'> Nasa Collection</Link>  |
        <Link to='/neo'> Near Earth Objects</Link>
      </nav>

      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/joke' element={<JokeView />} />
        <Route path='/nasacollection' element={<NasaCollectionView />} />
        <Route path='/neo' element={<NearEarthObjectsView />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
