import {Suspense, lazy} from 'react'
import {
  AnimatePresence,
} from "framer-motion";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer';
import Loading from './pages/Loading';
// import Home from './pages/Home'
// import About from './pages/About'
// import MusicPlayer from './pages/MusicPlayer'
// import VideoPlayer from './pages/VideoPlayer'
// import Acting from './pages/Acting'
// import Gallery from './pages/Gallery'
// import Shows from './pages/Shows'
// import Contact from './pages/Contact'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const MusicPlayer = lazy(() => import('./pages/MusicPlayer'))
const VideoPlayer = lazy(() => import('./pages/VideoPlayer'))
const Acting = lazy(() => import('./pages/Acting'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Shows = lazy(() => import('./pages/Shows'))
const Contact = lazy(() => import('./pages/Contact'))
const Teaching = lazy(() => import('./pages/Teaching'))
const Culture = lazy(() => import('./pages/Culture'))




function App() {

  const location = useLocation();


  return (
    <>
    <Suspense fallback = {<Loading />}>
      <Navbar />
      <AnimatePresence 
        mode={"wait"}
        >
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<MusicPlayer />} />
            <Route path="/acting" element={<Acting />} />
            <Route path="/videos" element={<VideoPlayer />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact/>} />
            {/* <Route component={NotFound} /> */}
          </Routes>
        </AnimatePresence>
        <Footer />
      </Suspense>
    </>
  )
}

// function Layout() {
//     return(
//       <>
//         <Navbar />
//         <Suspense fallback={<h1>Loading ...</h1>}>
//           <Outlet />

//         </Suspense>
//       </>
//     )
// }

export default App
