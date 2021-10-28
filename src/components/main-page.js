import React from "react"
import './main.css';
import backgroundImg from "../img/back.jpg";
import { getQuotes } from "../services"

export const MainPage = () => {
  const [quotes, setQuotes] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {

    setTimeout(() => {
      getQuotes()
        .then(response => response.json())
        .then(data => setQuotes(data));

      setIsLoading(false);
    }, 2500);

  }, []);

  console.log(quotes);

  return (

    /*<div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', backgroundRepeat: 'no-repeat' }}>*/

    <>

      <h1 style={{ textAlign: 'center', color: 'yellow' }} > <strong> Simpsons quotes </strong> </h1>

      {isLoading && <p style={{ color: 'red', textAlign: 'center', fontSize: '30px' }} > Loading...</p>}

      <ul>
        {quotes.map(({ character }) => (
          <p key={character} style={{ fontSize: '25px', textAlign: 'center' }} > <strong> {character} says... </strong>  </p>
        ))}
      </ul>

      <ul>
        {quotes.map(({ quote }) => (
          <p className='listitem' style={{ fontSize: '20px', textAlign: 'center', color: 'black' }} key={quote}>  <strong>{quote}</strong>  </p>
        ))}
      </ul>

      {quotes.map(({ image, character }) => (
        <div style={{ textAlign: 'center' }}>
          <img key={character} src={image} alt={character} style={{ width: '100', height: '100' }} />
        </div>
      ))}

    </>

    /*</div>*/

  )
}