import React from 'react'
import {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import FormSearch from './input';
import DayWeather from './dayWeather'
import CheckboxSelectDay from './checkboxSelectDay'
import "./style.css";

class Map extends Component {
  render() {
    return (
      <React.Fragment>
          <div className = "wrapperCheckbox"> 
            { this.props.listOfDays.map(day => {  
                return <CheckboxSelectDay changeHidden = {this.props.changeHidden} key = {day.id} time = {day.dt_txt} id = {day.id}/>        
            })}
          </div>
          <div className = "wrapperWeather"> 
            { this.props.listOfDays.map(day => {   
              if(!day.hidden){
                return <DayWeather weather = {day} key = {day.id} time = {day.id}/>   
              }                       
            })}
          </div>        
          <FormSearch setInfo = {this.props.setInfo} setNonexistentCity = {this.props.setNonexistentCity} existentCity = {this.props.existentCity}/>
          <ReactMapGL mapboxApiAccessToken={"pk.eyJ1IjoiZGFyeWFkcmFjaHVrIiwiYSI6ImNqbjNiMmMwNTBiMmszd28ycXgwdjdveGIifQ.8FzTZ1Rjy76vf6r_7uVC9w"}
          width={window.innerWidth}
          height={window.innerHeight}
          latitude={this.props.coords.lat}
          longitude={this.props.coords.lon}
          zoom={this.props.zoom}
          onViewportChange={(viewport) => {this.props.setInfoFromMapGL(viewport)}}
        />
      </React.Fragment>     
    );
  }
}

export default Map;