import React from 'react';
import styled from 'styled-components'
import { CityTitle } from './CityTitle';
import { TempText } from './TempText';

export const StyledWeatherDisplay = styled.div`
    align-content: center;
    border: 1px solid;
    background-color: white;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    margin: auto;
    margin-top: 70px;
    padding: 20px;
    text-align: center;
    height: 200px;
    width: 500px;
    display: grid;
    grid-template-columns: 50% 50%;
`;

export const WeatherDisplay = ({data}) => {

    return(
        <StyledWeatherDisplay>
            {data ?
              <>
                  <div>
                    <CityTitle aria-label="title">{data.name}</CityTitle>
                    <img alt='Weather logo' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}/>
                    <div>{(data.weather[0].description).replace(/\b\w/g, l => l.toUpperCase())}</div>
                </div>
                <div>
                    <TempText>Temperature: {data.main.temp}</TempText>
                    <TempText>Max: {data.main.temp_max} C°</TempText>
                    <TempText>Min: {data.main.temp_min} C°</TempText>
                </div>
              </>
              : <div>City noy found</div> }
        </StyledWeatherDisplay>
    )
};

export default WeatherDisplay;

