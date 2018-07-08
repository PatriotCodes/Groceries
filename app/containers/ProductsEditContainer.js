import React, {Component} from "react";
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    StatusBar,
    Platform,
    TouchableHighlight,
    Image
} from 'react-native';
import ProductEdit from '../components/ProductEdit';
import {bindActionCreators} from 'redux';
import {ActionCreators} from "../actions";
import {Actions} from 'react-native-router-flux';
import globalStyles, {highlightColor} from '../constants/GlobalStyles';
import LoadingIndicator from '../components/LoadingIndicator';
import AddNewProduct from '../components/AddNewProduct';

class ProductsEditContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addNewVisible: false
        };
        this.closeModal = this.closeModal.bind(this);
        this.addNew = this.addNewProduct.bind(this);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <AddNewProduct modalVisible={this.state.addNewVisible}
                addNew={this.addNew} closeModal={this.closeModal}/>
                <View style={[globalStyles.navBarView,
                        {marginTop: (Platform.OS === 'ios') ? 20 : StatusBar.currentHeight,
                        flexDirection: "row"}]}>
                    <TouchableHighlight underlayColor={highlightColor} onPress={() =>
                        this.setState({addNewVisible: true})}>
                    <Image
                        style={styles.headerIcon}
                        source={require('../media/plus.png')}/>
                    </TouchableHighlight>
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
    }

    closeModal() {
        this.setState({addNewVisible: false})
    }

}

const styles = StyleSheet.create({
    itemSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#d5d5d6",
    },
    headerText: {
        fontFamily: "Roboto",
        fontSize: 15,
        textAlign: 'center',
        flex: 1,
        fontWeight: "bold",
        paddingTop: (Platform.OS === 'ios') ? 14 : StatusBar.currentHeight - 6,
        marginLeft: 10
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
    headerIcon: {
        width: Platform.OS === 'ios'? 44 : 34,
        height: Platform.OS === 'ios'? 44 : 34,
        marginLeft: 10,
        marginTop: 10,
        paddingRight: 10,
    }
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
