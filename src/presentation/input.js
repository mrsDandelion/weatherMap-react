import React from 'react'
import axios from "axios"
import "./style.css";

function FormSearch({ setInfo, setNonexistentCity, existentCity }){

    let textInput = React.createRef();

    async function getInfoUsingName(){
        const info = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${textInput.current.value}&appid=8ae8e427b1b89f75e561d1afb26ed67c`)
                    .then(response => response.data)
                    .catch(()=>{setNonexistentCity()});
        if(info){
            setInfo(info)
        }        
    }

    return <input type = "text" ref={textInput} onChange = {getInfoUsingName} className = {existentCity?"existentCity":"nonexistentCity"}/>;
}

export default FormSearch;