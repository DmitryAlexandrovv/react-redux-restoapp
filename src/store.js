import {createStore} from 'redux';
import reducer from './reducers';
import { createContext } from 'react';

const store = createStore(reducer);

export default store;