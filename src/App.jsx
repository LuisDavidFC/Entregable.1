import React, { useState } from 'react'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import colors from './utils/colors'

// --------- Principal Element
function App() {

// --------- Function define to random elements
  const getRandomQuote = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  // --------- Asign the functions random to json and colors for use
  let quoteRandom = getRandomQuote(quotes)
  let colorRandom = getRandomQuote(colors)

  // --------- useState: Define state, function to change the state an initial value to state of quote and color
  const [randomQuote, setRandomQuote] = useState(quoteRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)

  // --------- Define object to BGC random color
  const objStyle = {
    backgroundColor: randomColors
  }

  // --------- Re-Asign the functions random to json and colors for use
  const getRandomAll = () => {
    quoteRandom = getRandomQuote(quotes)
    colorRandom = getRandomQuote(colors)

    // --------- Change the stae of randomQuote and randomColors
    setRandomQuote(quoteRandom)
    setRandomColors(colorRandom)
  }
  
  // --------- JSX Return 
  // --------- Send to component the information to renderize the cards
  return (
    <div className="App" style={objStyle}>
      <QuoteBox 
        randomQuote={randomQuote} 
        randomColors={randomColors}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

// --------- Export the component to use on main element
export default App
