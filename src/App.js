import './App.css';
import React, { useEffect, useState } from 'react';
import { StyledInput } from './components/Input';
import WeatherDisplay from './components/WeatherDisplay';
import { SearchButton } from './components/SearchButton';
import { AppTitle } from './components/AppTitle';
import AppFooter from './components/AppFooter';
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
            <WeatherDisplay data={data}/>
        </div>
        <AppFooter />
    </div>
  );
}

export default App;
