import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    View,
    ActivityIndicator,
    StyleSheet,
    Modal,
    StatusBar,
    Platform,
} from 'react-native';

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
                <View style={styles.container}>
                    <Modal
                        transparent={true}
                        animationType={'none'}
                        visible={this.state.loading}
                        onRequestClose={() => {
                            console.log('close modal')
                        }}>
                        <View style={styles.modalBackground}>
                            <View style={styles.activityIndicatorWrapper}>
                                <ActivityIndicator
                                    animating={true}/>
                            </View>
                        </View>
                    </Modal>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight }}>
                    <Text>Products loaded! {this.props.products}</Text>
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#e5e5e5',
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});

function mapStateToProps(state) {
    return {
        products: state.productsReducer.products,
        loading:  state.productsReducer.loading
    }
}

export default connect(mapStateToProps)(ProductsContainer);
