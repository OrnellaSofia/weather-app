import './App.css';
import React, { useEffect, useState } from 'react';
import { StyledInput } from './components/molecules/Input';
import { WeatherContainer} from './components/molecules/WeatherContainer';
import { SearchButton } from './components/atoms/SearchButton';
import { CityTitle } from './components/atoms/CityTitle';
import apiKeys from './keys';
// const fetch = require("node-fetch");

function App() {
  const [value, setValue] = useState("London")
  const [data, setData] = useState()

  useEffect(async ()=> {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKeys}&units=metric`);
    const data = await res.json();
    return {
      props: {
          initial: data
      }
    }
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
      let searchData = await getData(value)
      if (searchData.props.data){
          setData(searchData.props.data)
      }else{
          setData(null)
      }
  }

  const getData = async ( value) => {
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
            <h1 role="heading">Weather App</h1>
            <StyledInput
            onChange={handleChange}
            value={value}
            placeholder="Please enter a city"
            />
            <SearchButton
            onClick={handleSearch}
            >Search</SearchButton>
            <WeatherContainer>
              {data ?
              <div>
              <CityTitle aria-label="title">{data.name}</CityTitle>
              <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}/>
              <div>{(data.weather[0].description).replace(/\b\w/g, l => l.toUpperCase())}</div>
              <div>Max: {data.main.temp_max} C°</div>
              <div>Min: {data.main.temp_min} C°</div>
              </div>
              : <div>City noy found</div> }
            </WeatherContainer>
        </div>
    </div>
  );
}

export default App;
