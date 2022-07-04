import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { FlatListController } from "./FlatListController";
import { ListInterface } from "./Model/ListInterface";



export default class FlatListComponent extends FlatListController {

    render() {
        return(
            <View style={styles.view}>
            <FlatList data={this.state.list}
                    onEndReachedThreshold={0.01}
                    onEndReached={() => this.handleLoadMoreData()}
                    renderItem={({ item, index }) => this.renderListItem(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={this.renderFooter}
                />
            </View>
        )
    }

    renderListItem(item: ListInterface, index: number) {
        var title : string = item.author
        title = title === '' ? 'Title' : title

        return (
            <TouchableOpacity onPress={() => {
                this.openDetails(item);
            }}>
                <View style={styles.rowStyle}>
                    <Text style={styles.txtStyle1}>Title: <Text style={styles.txtStyle3}>{item.title}</Text> </Text>
                    <Text style={styles.txtStyle2}>Author : <Text style={styles.txtStyle3}>{item.author} </Text></Text>
                    <Text style={styles.txtStyle2}>Created Date : <Text style={styles.txtStyle3}>{item.created_at}</Text></Text>
                    <TouchableOpacity onPress={() => {
                        this.handleClick(item.url)
                    }}>
                        <Text style={styles.txtStyle2}>Link : <Text style={{ ...styles.txtStyle3, color: 'blue' }}>{item.url}</Text></Text>
                    </TouchableOpacity>
                </View >
            </TouchableOpacity>
        ); 
    }
    renderFooter() {
        return (
            <View>
                <ActivityIndicator size={"small"} color={"black"} style={{ width: 50, height: 50 }} animating={true}/>
            </View>
        );
    }


    // return() {
    //     <View>
    //         <Text style={styles.textStyle1}> Author Name :   </Text>
    //         <Text style={styles.textStyle1}> Title :  </Text>
    //         <Text style={styles.textStyle1}> Created At :  </Text>
    //         <Text style={styles.textStyle1}> URL :  </Text>

    //     </View>
    // }

    
    }


const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#D3D3D3"
    },
    separator: {
        height: 20,
    },
    rowStyle: {
        margin: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
    },
    txtStyle1: {
        padding: 5,
        fontWeight: "bold",
        fontSize: 20,
        color: "black"
    },
    txtStyle2: {
        padding: 2,
        fontSize: 18,
        fontWeight: "bold",
    },

    txtStyle3: {
        padding: 2,
        fontSize: 18,
        color: "#228B22",
        fontWeight: "normal",
    }
})