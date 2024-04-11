import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './services/getRandomNumber'
import LocationInfo from './components/ResidentCard'
import FormSearch from './components/FormSearch'
import ResidentCard from './components/ResidentCard'


function App() {

  const randomLocation = getRandomNumber(126)

  const [locationSelected, setLocationSelected] = useState(randomLocation)

  const url = `https://rickandmortyapi.com/api/location/${locationSelected || getRandomNumber(126)}`

  const [location, getLocation, hasError] = useFetch(url)
   
  useEffect(() => {
    getLocation()
  },[locationSelected])
  console.log(location)
  
  return (
    <div className='app'>
      <h1 className='app_title'>Rick and Morty</h1>
      <FormSearch
        setLocationSelected={setLocationSelected}
      />
      {
        hasError
          ? <h2 className='app__error'>❌ Hey! You must provide an id from 1 to 126 😵</h2>
          : (
            <>
              <LocationInfo
                location={location}
              />
              <div className='container-resident'>
                {
                  location?.residents.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
          )
      }
   </div> 

  );
}

export default App;
