const init = {
    City:"",
    coord:
        {
            lat: 53.9,
            lon: 27.56   
        },
    tempToday: "",
    zoom: 10,
    existentCity: true,
    list: []
}
export const reducer = (state = init, action) => {        
    switch (action.type) {
        case "SET_INFO":
            return Object.assign({}, state,
                {existentCity: true, 
                    zoom: 10, 
                    City: action.info.city.name, 
                    coord: action.info.city.coord,
                    list: [{
                        dt_txt: action.info.list[0].dt_txt,
                        wind: action.info.list[0].wind.speed,
                        temp: action.info.list[0].main.temp,
                        pressure: action.info.list[0].main.pressure,
                        id: action.info.list[0].dt,
                        hidden: true,
                    },
                    {
                        dt_txt: action.info.list[7].dt_txt,
                        wind: action.info.list[7].wind.speed,
                        temp: action.info.list[7].main.temp,
                        pressure: action.info.list[7].main.pressure,
                        id: action.info.list[7].dt,
                        hidden: true,
                    },
                    {
                        dt_txt: action.info.list[14].dt_txt,
                        wind: action.info.list[14].wind.speed,
                        temp: action.info.list[14].main.temp,
                        pressure: action.info.list[14].main.pressure,
                        id: action.info.list[14].dt,
                        hidden: true,
                    },
                    ]
                });
        case "SET_INFO_FROM_MAP":
            return Object.assign({}, state,{list:[], zoom: action.info.zoom, coord: {lat:action.info.latitude, lon:action.info.longitude}});
        case "CHANGE_HIDDEN":
            return Object.assign({}, state, {
                list:state.list.map(day =>
                    {                       
                        if(day.id === action.id){
                            return Object.assign({}, day, 
                                {
                                    hidden: !day.hidden,
                                }
                            ) 
                        }
                        return day                                       
                    }
                )
            }       
                  
            )
        case "SET_NO_CITY":
            return Object.assign({}, state,{list:[], existentCity: false});
        default:
            return state
        }
}
export default reducer;
    