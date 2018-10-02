import { createAction } from 'redux-actions';
// при нажатии на переданный объект будет вызываться action creator
//который будет возвращать объект, которой внизу указан в return
export const select = (car) => {
    // alert(`Now car is: ${car.model}`);
    return {
        //тип данных, которые мы возвращмем, название придумываем сами
        type: "CAR_SELECTED",
        //принято называть payload ключ, в который будем передавать целевой объект
        payload: car,
    }
}