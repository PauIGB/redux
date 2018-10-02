import './WebPage.css';

import React, {PureComponent } from 'react';

import CarListContainer from 'containers/CarListContainer';
import DetailsContainer from 'containers/DetailsContainer'
export default class WebPage extends PureComponent {
    render() {     
        return (  
            <div className="webpage">
                <h2>Cars:</h2>
                <ol>
                    <CarListContainer />
                </ol>
                <hr/>
                <h3>Details:</h3>
                <DetailsContainer />
            </div>       
        );
    }
}
