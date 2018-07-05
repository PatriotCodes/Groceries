import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import ProductsEditContainer from './ProductsEditContainer';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

class AppContainer extends Component {

    render() {
        return (
            <Router titleStyle={styles.navText} navigationBarStyle={styles.navBar}>
                <Scene key="root" titleStyle={styles.headerText}>
                    <Scene key="products" component={ProductsContainer}
                           title="Groceries"
                           backTitle=""
                           renderLeftButton={<View/>}
                           renderRightButton={this.editButton()}
                           onRight={() => Actions.editProducts()}
                           initial/>
                    <Scene key="editProducts" component={ProductsEditContainer}
                           renderLeftButton={this.addNewButton()}
                           renderRightButton={this.doneEditingButton()}
                           title="Groceries"/>
                </Scene>
            </Router>
        )
    }

    doneEditingButton() {
        return(
            <TouchableHighlight onPress={() => Actions.products()}>
                <Text style={styles.navText}>Done</Text>
            </TouchableHighlight>
        )
    }

    editButton() {
        return(
            <TouchableHighlight onPress={() => Actions.editProducts()}>
                <Text style={styles.navText}>EDIT</Text>
            </TouchableHighlight>
        )
    }

    addNewButton() {
        return(
            <TouchableHighlight onPress={() => Actions.refresh({hideNavBar: true})}>
                <Text style={styles.navText}>+</Text>
            </TouchableHighlight>
        )
    }

}

styles = StyleSheet.create({
    headerText: {
        fontFamily: "Roboto",
        fontSize: 14,
        textAlign: 'center',
        flex: 1
    },
    navText: {
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "bold",
        paddingRight: 10,
        paddingLeft: 10,
    },
    navBar: {
        paddingTop: 0,
        height: 44,
        backgroundColor: "#d5d5d6",
    }
});

export default AppContainer;