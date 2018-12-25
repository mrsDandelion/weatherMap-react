import React from 'react'
import PropTypes from 'prop-types'
import "./style.css";

const arrDays = [ "Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]

const CheckboxSelectDay = ({time, changeHidden, id}) => (
  
  <label><input type = "checkbox" name = "selectDays"  onChange = {changeHidden.bind(this,id)}/>
    {arrDays[new Date(time).getDay()]}
  </label>
)

CheckboxSelectDay.propTypes = {
  time: PropTypes.string.isRequired,  
  changeHidden: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

export default CheckboxSelectDay;