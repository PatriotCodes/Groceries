import React, {Component} from "react";
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import Product from '../components/Product';
import {bindActionCreators} from 'redux';
import {ActionCreators} from "../actions";

class ProductsEditContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: .9}}>
                    <FlatList
                        data={this.props.products}
                        renderItem={({item}) => (
                            <Product title={item.title}/>
                        )}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                    />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    itemSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#d5d5d6",
    },
});

function mapStateToProps(state) {
    return {
        products: state.productsReducer.products,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsEditContainer);
