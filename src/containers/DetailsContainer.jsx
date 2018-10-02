import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsContainer extends Component {
    render() {
        const { car } = this.props;
        if(!car) {
            return (<p>Выберите авто</p>)
        }
        return (
            <div>
                <h2>{car.model}</h2>
                <img src={`${car.img}`} alt="car" /><br/>
                <p>{car.desc}</p>
                <p>Скорость: {car.speed}, вес: {car.weight}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        car: state.active,
    };
};

export default connect(mapStateToProps)(DetailsContainer)