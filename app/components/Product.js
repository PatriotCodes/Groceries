import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class ProductContainer extends Component {

    render() {
        return (
            <View>
                <Text style={styles.productTextStyle}>{this.props.title}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    productTextStyle: {
        fontFamily: 'Roboto',
        fontSize: 20,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 28,
    },
});

export default ProductContainer;