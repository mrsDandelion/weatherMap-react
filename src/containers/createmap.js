import { connect } from 'react-redux'
import Map from '../presentation/map'
import { setInfo } from './../actions'
import { setInfoFromMapGL } from './../actions'
import { setNonexistentCity } from './../actions'
import { changeHidden } from './../actions'


const mapStateToProps = (state) => {  
  return {
    zoom: state.zoom,
    coords: state.coord,
    existentCity: state.existentCity,
    listOfDays: state.list
  }    
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInfo: info => {dispatch(setInfo(info))},
    setInfoFromMapGL: info => {dispatch(setInfoFromMapGL(info))},
    setNonexistentCity: () => {dispatch(setNonexistentCity())},
    changeHidden: id => {dispatch(changeHidden(id))},
  }
}
const CreateMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default CreateMap;