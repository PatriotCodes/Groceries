import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
    FlatList,
    Platform,
    AsyncStorage,
    Image,
    TouchableHighlight,
} from 'react-native';
import Product from '../components/Product';
import LoadingIndicator from '../components/LoadingIndicator';
import {bindActionCreators} from 'redux';
import {ActionCreators} from "../actions";
import {highlightColor} from "../constants/GlobalStyles";


class ProductsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: "home",
        };
    }

    componentDidMount() {
    //     AsyncStorage.removeItem('data');
        this.props.getAllProducts();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.props.loading && <LoadingIndicator/>}
                {!this.props.loading &&
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
                    <View style={styles.footer}>
                        <Image
                            style={styles.footerIcon}
                            source={require('../media/list.png')}/>
                        <Image
                            style={styles.footerIcon}
                            source={require('../media/cart.png')}/>
                    </View>
                </View>}
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
    footer: {
        height: Platform.OS === 'ios'? 64 : 54,
        backgroundColor: "#f8f9f9",
        borderTopColor: '#b2b2b2',
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    footerIcon: {
        resizeMode: 'contain',
        width: Platform.OS === 'ios'? 44 : 34,
        height: Platform.OS === 'ios'? 44 : 34,
        marginTop: 10,
        flex: 1
    }
});

function mapStateToProps(state) {
    return {
        products: state.productsReducer.products,
        loading: state.productsReducer.loading
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
