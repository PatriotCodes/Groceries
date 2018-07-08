import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import globalStyles from '../constants/GlobalStyles';
import Swipeout from 'react-native-swipeout';

class ProductContainer extends Component {

    leftButton = [{
        backgroundColor: "#e6e7e8",
        component: (<View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Image style={{width: 30, height: 30}} source={require('../media/cart.png')}/>
        </View>)
    }];

    render() {
        return (
            <Swipeout left={this.leftButton}>
                <View style={{flex:1,flexDirection:"row"}}>
                    <View style={styles.productTextViewStyle}>
                        <Text style={globalStyles.primaryText}>{this.props.title}</Text>
                    </View>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <Image style={{width: 30, height: 30}} source={require('../media/home.png')}/>
                    </View>
                </View>
            </Swipeout>
        );
    }

}

const styles = StyleSheet.create({
    productTextViewStyle: {
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 28,
        paddingRight: 28,
        backgroundColor: "#FFFFFF",
        flex: 3.2
    },
});

export default ProductContainer;