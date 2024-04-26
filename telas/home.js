import React, {Component} from "react";
import {View, Text, Image, StyleSheet} from "react-native";
export default class Home extends Component {
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate("Humores")
        },3000)
    }
render (){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Humor</Text>
        </View>
    )
}
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#F9DCC4",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontSize:30
    }
})