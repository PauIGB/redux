import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

//добавляем хранилище store
//можно также импортировать через отдельный файл store.js
//в store можно добавлять только один объект из reducers, 
//поэтому в reducers должен быть файл, который объединяем все reducers из данной папки
// 1 способ
// import { createStore } from 'redux'; // создание хранилища
// import rootReducer from 'reducers'; // имопорт редьюсера, которые передает все редьюсеры из папки reducers
// const store = createStore(rootReducer); // передача в store данного редьюсера

//Преобразователи === редьюсеры, позволяют передавать данные в store
//в 2 способ
import store from './store'; // все делаем в отдельном файле store.js, который импортируем сюда

//Provider позволяет использовать данные, которые находятся в store
import { Provider } from 'react-redux';
import WebPage from 'components/WebPage'

class App extends Component {
    render(       
    ) {
        return( 
            <Fragment>                
                <WebPage />
            </Fragment>
         )
    }
}

const app = document.getElementById('app');
ReactDOM.render(
    // <h2>Здесь может быть любой текст</h2>
    <Provider store={store}><App /></Provider>
    , app)