import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import globalStyles from '../constants/GlobalStyles';

class ProductContainer extends Component {

    render() {
        return (
            <View style={styles.editItemView}>
                <View style={styles.removeBtnWrapper}>
                    <TouchableHighlight key={this.props.id}
                                        underlayColor='#690000' onPress={() => this.onPress(this.props.id)}
                                        style={styles.removeBtn}>
                            <Text style={{textAlign: "center", color: "white"}}>-</Text>
                    </TouchableHighlight>
                </View>
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
        flex: .9,
    },
    removeBtnWrapper: {
        flex: .2,
        alignItems: "center",
        justifyContent: "center",
    },
    removeBtn: {
        flex: 1,
        position: 'absolute',
        backgroundColor: "#990000",
        height: 20,
        width: 20,
        borderRadius: 10,
    },
    editItemView: {
        flex: 1,
        flexDirection: "row",
    }
});

export default ProductContainer;