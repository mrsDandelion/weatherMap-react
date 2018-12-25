import{
  SET_INFO,
  SET_INFO_FROM_MAP,
  SET_NO_CITY,
  CHANGE_HIDDEN
} from "./../const"

export const setInfo = (info) => {
  return {
    type: SET_INFO,
    info
  }
}
export const setInfoFromMapGL = (info) => {
  return {
    type: SET_INFO_FROM_MAP,
    info
  }
}
export const setNonexistentCity = () => {
  return {
    type: SET_NO_CITY
  }
}
export const changeHidden = (id) => {
  return {
    type: CHANGE_HIDDEN,
    id
  }
}
