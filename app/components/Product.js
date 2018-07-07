import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import globalStyles from '../constants/GlobalStyles';

class ProductContainer extends Component {

    render() {
        return (
            <View style={styles.productTextViewStyle}>
                <Text style={globalStyles.primaryText}>{this.props.title}</Text>
            </View>
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
    },
});

export default ProductContainer;