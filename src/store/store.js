import { combineReducers, createStore } from 'redux'
import { setAppleCount } from '../reducers/reducers'

const setAppleCountApp = combineReducers({
    setAppleCount
});

export const store = createStore(setAppleCountApp);

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)
