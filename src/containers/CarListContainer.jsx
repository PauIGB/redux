import React, { Component,Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from 'actions/index';

class CarListContainer extends Component {
    //получение напрямую без использования mapStateToProps (возможно, когда передается один массив)
    showList() {
        // 1й вариант запись без использования ф-ции mapDispatchToProps
        // const { cars } = this.props;
  // 2й вариант - используем mapDispatchToProps
        const { cars, select } = this.props;    
        return cars.map((car, idx) => <li onClick={() => select(car)} key={car.id}>{car.model}</li>)

        
    }
    render() {
        return( 
            <Fragment>
                {this.showList()}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        cars: state.cars,
    };
};

// получает метод dispatch с actions и присваивает его в props
const mapDispatchToProps = dispatch => {
    return {
        select: bindActionCreators(select, dispatch),
    }
    // bindActionCreators(
    // {
    //     select: select,
    // }
    // , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarListContainer);