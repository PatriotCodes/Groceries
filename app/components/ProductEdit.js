import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import globalStyles from '../constants/GlobalStyles';

class ProductContainer extends Component {

    render() {
        return (
            <View style={styles.editItemView}>
                <TouchableHighlight key={this.props.id}
                                    underlayColor='black' onPress={() => this.onPress(this.props.id)}>
                    <View style={styles.removeBtn}/>
                </TouchableHighlight>
                <View style={styles.productTextViewStyle}>
                    <Text style={globalStyles.primaryText}>{this.props.title}</Text>
                </View>
            </View>
        );
    }

    onPress = (id) => {
        alert(id);
    };

}

const styles = StyleSheet.create({
    productTextViewStyle: {
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 28,
        paddingRight: 28,
        flex: .9,
    },
    removeBtn: {
        flex: .1,
        backgroundColor: "#990000"
    },
    editItemView: {
      flex: 1,
      flexDirection: "row",
    }
});

export default ProductContainer;