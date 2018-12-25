import React from 'react'
import CreateMap from "./containers/createmap"
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './reducer'
import createBrowserHistory from 'history/createBrowserHistory'
import {createStore, applyMiddleware} from 'redux'
import "./style.css";

export const customHistory = createBrowserHistory();
export let store = createStore(reducer, applyMiddleware())

render(
  <Provider store = {store}>
    <CreateMap/>
  </Provider>,
  document.getElementById('root')
)