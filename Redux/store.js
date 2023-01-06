import { createStore } from 'redux'
import {addLikeReducer} from './reducer'

const store = createStore(addLikeReducer)
export default store
