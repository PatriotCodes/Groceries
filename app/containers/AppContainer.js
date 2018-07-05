import React, { Component } from 'react';
import { View } from 'react-native';
import ProductsContainer from './ProductsContainer';
import ProductsEditContainer from './ProductsEditContainer';
import { Router, Scene, Actions } from 'react-native-router-flux';

class AppContainer extends Component {

    render() {
        return (
            <Router>
                <Scene key="root" titleStyle={{ textAlign: 'center', flex: 1 }}>
                    <Scene key="products" component={ProductsContainer}
                           title="Groceries" renderBackButton={() => <View/>}
                           rightTitle=" Edit"
                           onRight={() => Actions.editProducts()}
                           initial/>
                    <Scene key="editProducts" component={ProductsEditContainer}
                           title="Groceries"/>
                </Scene>
            </Router>
        )
    }

}

export default AppContainer;