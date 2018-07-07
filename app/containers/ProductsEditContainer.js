import React, {Component} from "react";
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    StatusBar,
    Platform,
    TouchableHighlight
} from 'react-native';
import ProductEdit from '../components/ProductEdit';
import {bindActionCreators} from 'redux';
import {ActionCreators} from "../actions";
import {Actions} from 'react-native-router-flux';
import globalStyles, {highlightColor} from '../constants/GlobalStyles';
import LoadingIndicator from '../components/LoadingIndicator';

class ProductsEditContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "TEST"
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={[globalStyles.navBarView,
                        {marginTop: (Platform.OS === 'ios') ? 20 : StatusBar.currentHeight,
                        flexDirection: "row"}]}>
                    <Text style={styles.navText}>+</Text>
                    <Text style={styles.headerText}>Groceries</Text>
                    <TouchableHighlight underlayColor={highlightColor} onPress={() => Actions.pop()}>
                        <Text style={styles.navText}>Done</Text>
                    </TouchableHighlight>
                </View>
                {this.props.loading && <LoadingIndicator/>}
                {!this.props.loading &&
                <FlatList
                    data={this.props.products}
                    renderItem={({item}) => (
                        <ProductEdit title={item.title} id={item.id}/>
                    )}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                />}
            </View>
        )
    }

    addNewProduct(title) {
        this.props.addNewProduct(title);
        Actions.products();
    }

}

const styles = StyleSheet.create({
    itemSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "white",
    },
    headerText: {
        fontFamily: "Roboto",
        fontSize: 15,
        textAlign: 'center',
        flex: 1,
        fontWeight: "bold",
        paddingTop: (Platform.OS === 'ios') ? 14 : StatusBar.currentHeight - 6,
    },
    navText: {
        fontFamily: "Roboto",
        paddingTop: (Platform.OS === 'ios') ? 14 : StatusBar.currentHeight - 6,
        fontSize: 15,
        fontWeight: "bold",
        paddingRight: 10,
        paddingLeft: 10,
        width: 60,
    },
});

function mapStateToProps(state) {
    return {
        products: state.productsReducer.products,
        loading: state.productsReducer.loading
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsEditContainer);
