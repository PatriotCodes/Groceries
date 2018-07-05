import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
    StatusBar,
    Platform,
    FlatList,
} from 'react-native';
import Product from '../components/Product';
import LoadingIndicator from '../components/LoadingIndicator';

class ProductsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getAllProducts()
    }

    render() {
        if (this.props.loading) {
            return (
                <LoadingIndicator/>
            );
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.props.products}
                        renderItem={({item}) => (
                            <Product title={item.title}/>
                        )}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                    />
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    },
    itemSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#d5d5d6",
    },
});

function mapStateToProps(state) {
    return {
        products: state.productsReducer.products,
        loading: state.productsReducer.loading
    }
}

export default connect(mapStateToProps)(ProductsContainer);
