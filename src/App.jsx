import './App.css'
import sl1 from "./assets/sl1.png";
import sl2 from "./assets/sl2.png";
import sl3 from "./assets/sl3.png";
import sl4 from "./assets/sl4.png";
import Slideshow from './imageSlider/Slideshow';

function App() {
  const images = [
    { image: sl1 },
    { image: sl2 },
    { image: sl3 },
    { image: sl4 },
  ]

  return (
    <div className="app">
      <Slideshow slides={images} />
{/* commit */}
    </div>
  )
}

export default App
