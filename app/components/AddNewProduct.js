import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View, Platform,
    StatusBar,
    TouchableHighlight,
    Modal,
    TextInput,
} from 'react-native';
import {highlightColor} from "../constants/GlobalStyles";
import globalStyles from "../constants/GlobalStyles";

class AddNewProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.modalVisible,
            text: "",
            symbolsLeft: 27
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modalVisible !== this.props.modalVisible) {
            this.setState({visible: nextProps.modalVisible});
        }
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.visible}
                    onRequestClose={() => {
                        this.props.closeModal()
                    }}>
                    <View style={[globalStyles.navBarView,
                        {flexDirection: "row"}]}>
                        <TouchableHighlight underlayColor={highlightColor} onPress={() =>
                            this.props.closeModal()}>
                            <Text style={styles.navText}>Cancel</Text>
                        </TouchableHighlight>
                        <Text style={styles.headerText}>Add new list item</Text>
                        <TouchableHighlight underlayColor={highlightColor} onPress={() =>
                            this.onPressDone()}>
                            <Text style={styles.navText}>Done</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <Text style={styles.mainText}>Add new list item</Text>
                    </View>
                    <View style={{flex: 3, alignItems: "center"}}>
                        <TextInput style={[styles.mainText, {width: "90%", paddingBottom: 4}]}
                                   onChangeText={(text) => this.onTextChange(text)}
                                   maxLength={27}
                                   value={this.state.text}/>
                        <Text style={[styles.mainText, {alignSelf: "flex-end", marginRight: "5%"}]}>
                            Characters left {this.state.symbolsLeft}</Text>
                    </View>
                </Modal>
            </View>
        );
    }

    onTextChange(text) {
        const diff = this.state.text.length - text.length;
        this.setState({text: text, symbolsLeft: this.state.symbolsLeft + diff});
    }

    onPressDone() {
        if (!(this.state.text.trim().length === 0)) {
            this.props.addNew(this.state.text);
            this.props.closeModal();
        } else {
            alert("Please enter a valid name")
        }
    }

}

const styles = StyleSheet.create({
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
        paddingLeft: 10,
        width: 75,
    },
    mainText: {
        fontFamily: "Roboto",
        fontSize: 15,
        fontWeight: "bold",
    }
});

export default AddNewProduct;