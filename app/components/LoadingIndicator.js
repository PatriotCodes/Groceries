import React, {Component} from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';

class LoadingIndicator extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    transparent={true}
                    animationType={'none'}
                    visible={true}
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
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default LoadingIndicator;