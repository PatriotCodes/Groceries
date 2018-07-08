import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
    FlatList,
    Platform,
    Image,
    TouchableHighlight,
} from 'react-native';
import Product from '../components/Product';
import LoadingIndicator from '../components/LoadingIndicator';
import {bindActionCreators} from 'redux';
import {ActionCreators} from "../actions";
import {highlightColor} from "../constants/GlobalStyles";
import {SwipeRow} from 'react-native-swipe-list-view';

class ProductsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayCart: false,
        };
    }

    componentDidMount() {
        //AsyncStorage.removeItem('data');
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
                            renderItem={(data) => (
                                <SwipeRow
                                    disableLeftSwipe={true}
                                    closeOnScroll={false}
                                    leftOpenValue={75}
                                    onRowOpen={(rowKey, rowMap) => {
                                        this.props.addToCart(data.item.id);
                                    }}
                                    onRowClose={(rowKey, rowMap) => {
                                        this.props.removeFromCart(data.item.id);
                                    }}>
                                    <View style={{flex: 1, flexDirection: "row"}}>
                                        <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
                                            <Image style={{width: 30, height: 30}}
                                                   source={require('../media/cart-inactive.png')}/>
                                        </View>
                                        <View style={{flex: 3.2}}></View>
                                    </View>
                                    <View>
                                        {(!this.state.displayCart || this.props.cart.includes(data.item.id))
                                        && <Product title={data.item.title} id={data.item.id}/>}
                                    </View>
                                </SwipeRow>
                            )}
                            keyExtractor={item => item.id.toString()}
                            ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                        />
                    </View>
                    <View style={styles.footer}>
                        <TouchableHighlight style={styles.footerBtn}
                                            onPress={() => this.setState({displayCart: false})}
                                            underlayColor={highlightColor}>
                            {!this.state.displayCart ? <Image
                                    style={styles.footerIcon}
                                    source={require('../media/list.png')}/> :
                                <Image
                                    style={styles.footerIcon}
                                    source={require('../media/list-inactive.png')}/>
                            }
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.footerBtn}
                                            onPress={() => this.setState({displayCart: true})}
                                            underlayColor={highlightColor}>
                            {this.state.displayCart ? <Image
                                    style={styles.footerIcon}
                                    source={require('../media/cart-active.png')}/> :
                                <Image
                                    style={styles.footerIcon}
                                    source={require('../media/cart-inactive.png')}/>
                            }
                        </TouchableHighlight>
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
        height: Platform.OS === 'ios' ? 64 : 54,
        backgroundColor: "#f8f9f9",
        borderTopColor: '#b2b2b2',
        borderTopWidth: 1,
        flexDirection: "row",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    footerIcon: {
        resizeMode: 'contain',
        width: Platform.OS === 'ios' ? 44 : 34,
        height: Platform.OS === 'ios' ? 44 : 34,
    },
    footerBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

function mapStateToProps(state) {
    return {
        products: state.productsReducer.products,
        loading: state.productsReducer.loading,
        cart: state.cartReducer.addedIDs
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
