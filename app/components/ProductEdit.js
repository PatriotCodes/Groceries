import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import globalStyles, {highlightColor} from '../constants/GlobalStyles';
import {removeProduct} from "../actions/products";
import {connect} from "react-redux";

class ProductEdit extends Component {

    render() {
        return (
            <View style={styles.editItemView}>
                <View style={styles.removeBtnWrapper}>
                    <TouchableHighlight key={this.props.id}
                                        underlayColor={highlightColor}
                                        onPress={() => this.onPress(this.props.id)}
                                        style={styles.removeBtn}>
                            <Text style={{textAlign: "center",
                                color: "white", paddingTop: 3}}>—</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.productTextViewStyle}>
                    <Text style={globalStyles.primaryText}>{this.props.title}</Text>
                </View>
            </View>
        );
    }

    onPress = (id) => {
        this.props.removeProduct(id);
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
        height: 26,
        width: 26,
        borderRadius: 13,
    },
    editItemView: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
    }
});

export default connect(null, {removeProduct})(ProductEdit);