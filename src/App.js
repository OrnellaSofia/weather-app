import './App.css';
import React, { useEffect, useState } from 'react';
import { StyledInput } from './components/molecules/Input';
import { WeatherDisplay} from './components/molecules/WeatherDisplay';
import { SearchButton } from './components/atoms/SearchButton';
import { CityTitle } from './components/atoms/CityTitle';
import { AppTitle } from './components/atoms/AppTitle';
import apiKeys from './keys';

function App() {
  const [value, setValue] = useState("")
  const [data, setData] = useState()

  useEffect(()=> {
    async function fetchData () {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKeys}&units=metric`);
        const data = await res.json();
        setData(data)
    }
    fetchData()
  }, [])

  const handleChange = (event) => {
      setValue(event.target.value)
  }

  const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSearch()
      }
    }

  const handleSearch = async () => {
      if(value.length) {
        let searchData = await getData(value)
        if (searchData.props.data){
            setData(searchData.props.data)
        }else{
            setData(null)
        }
      }
  }

  const getData = async (value) => {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKeys}&units=metric`)
      const data = await res.json()
      if (data.cod === "404"){
          return {
              props: {
                  error: data.message
              }
          }
      }
      else{
          return {
              props: {
                  data
              }
          }
      }
  }
  return (
    <div className="App">
        <div onKeyDown={handleKeyDown}>
            <AppTitle>Weather App</AppTitle>
            <StyledInput
                onChange={handleChange}
                value={value}
                placeholder="Please enter a city"
            />
            <SearchButton onClick={handleSearch}>Search</SearchButton>
            <WeatherDisplay>
              {data ?
              <div>
              <CityTitle aria-label="title">{data.name}</CityTitle>
              <img alt='Weather logo' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}/>
              <div>{(data.weather[0].description).replace(/\b\w/g, l => l.toUpperCase())}</div>
              <div>Max: {data.main.temp_max} C°</div>
              <div>Min: {data.main.temp_min} C°</div>
              </div>
              : <div>City noy found</div> }
            </WeatherDisplay>
        </div>
    </div>
  );
}

export default App;
