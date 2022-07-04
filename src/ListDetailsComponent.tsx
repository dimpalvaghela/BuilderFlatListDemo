import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import ListDetailsController from "./ListDetailsController";


export default class ListDetailComponent extends ListDetailsController{
    render(){
        return(
            <View style={styles.view}>
                <View style={styles.separator}></View>
                <Text style={styles.txtStyle}> {this.state.item ? JSON.stringify(this.state.item) : 'Nothing'}</Text>
            </View >
        )
    }
}

const styles =  StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },
    separator: {
        height: 20,
    },
    txtStyle: {
        padding: 10,
        fontSize: 14,
        fontWeight: "normal",
    },
})