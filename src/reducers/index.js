import { combineReducers } from 'redux';

import carsReducer from './cars';
import carActive from './car-active';

//вариант записи
// const rootReducer = combineReducers({
//     cars: carsReducer,
// });
// export default rootReducer;
export default combineReducers({
    cars: carsReducer,
    active: carActive,
});