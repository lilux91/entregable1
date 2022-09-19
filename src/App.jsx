//import reactLogo from './assets/react.svg'
import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import ImageBox from './components/ImageBox'
import quotes from'./json/quotes.json'
import images from'./json/images.json'
import color from './assets/utils/color'



function App() {
  
  //ME CALCULA UN INDICE RANDOM de cualquier arreglo, sino le coloco las llaves es un return implicito
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

  //Aqui se extrae el elemento segun el indice random
  //ME DEVUELVE UN INDICE RANDOM del arreglo quotes
  const firstQuote= quotes[getIndexRandom(quotes)]
//CALCULO EL COLOR RANDOM
  const firstColor = color[getIndexRandom(color)]
  
  // imagen random
  const firtsImage = images[getIndexRandom(images)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)
  const [randomImage, setRandomImage] = useState(firtsImage)

  //console.log(firstElement)

  const backgroundObject= {
    backgroundColor: randomColor
  }
  //Esta funcion calcula tanto un quote como un color random
  const getRandomAll= () => {
    setRandomQuote (quotes[getIndexRandom(quotes)])
    setRandomColor (color[getIndexRandom(color)])
  }

  return (
    <div style={backgroundObject} className="App">
      <QuoteBox 
      randomQuote={randomQuote}
      randomColor={randomColor}
      getRandomAll={getRandomAll}
      />
      <ImageBox image={randomImage}
      />
    </div>
  )
}

export default App
