import { createStore } from 'redux'
import Reducer from './reducer/index'

const store = createStore(Reducer)

export default store;