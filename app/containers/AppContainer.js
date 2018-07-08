import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import ProductsEditContainer from './ProductsEditContainer';
import { Router, Scene, Actions } from 'react-native-router-flux';
import {View, Text, TouchableHighlight, StyleSheet, Platform, Image} from 'react-native';
import globalStyles, {highlightColor} from '../constants/GlobalStyles';

class AppContainer extends Component {

    render() {
        return (
            <Router titleStyle={styles.navText} navigationBarStyle={globalStyles.navBarView}>
                <Scene key="root" titleStyle={styles.headerText}>
                    <Scene key="products" component={ProductsContainer}
                           title="Groceries"
                           backTitle=""
                           renderLeftButton={<View/>}
                           renderRightButton={this.editButton()}
                           onRight={() => Actions.editProducts()}
                           initial/>
                    <Scene key="editProducts" component={ProductsEditContainer}
                           hideNavBar={true}
                           title="Groceries"/>
                </Scene>
            </Router>
        )
    }

    doneEditingButton() {
        return(
            <TouchableHighlight underlayColor={highlightColor}
                onPress={() => Actions.products()}>
                <Text style={styles.navText}>Done</Text>
            </TouchableHighlight>
        )
    }

    editButton() {
        return(
            <TouchableHighlight style={{height: Platform.OS === 'ios'? 64 : 54,}}
                underlayColor={highlightColor}
                onPress={() => Actions.editProducts()}>
                <Image
                    style={styles.headerIcon}
                    source={require('../media/edit.png')}/>
            </TouchableHighlight>
        )
    }

}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "Roboto",
        fontSize: 15,
        textAlign: 'center',
        flex: 1
    },
    navText: {
        fontFamily: "Roboto",
        fontSize: 15,
        fontWeight: "bold",
        paddingRight: 10,
        paddingLeft: 10,
    },
    headerIcon: {
        width: Platform.OS === 'ios'? 44 : 34,
        height: Platform.OS === 'ios'? 44 : 34,
        marginRight: 10,
        marginTop: 10,
        paddingLeft: 10,
    }
});

export default AppContainer;