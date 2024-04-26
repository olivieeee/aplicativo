import React, {Component} from "react";
import {View, Text, Image, StyleSheet,TouchableOpacity} from "react-native";
export default class Humores extends Component {
render (){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>O que você está sentindo hoje?</Text>
            <TouchableOpacity style={styles.botao}>
                <Image source={require("../assets/tristeza.png")} style={styles.image}/>
                <Text>Tristeza</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Image source={require("../assets/ansiedade.png")} style={styles.image}/>
                <Text>Ansiedade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Image source={require("../assets/estresse.png")} style={styles.image}/>
                <Text>Estresse</Text>
            </TouchableOpacity>
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
        fontSize:18
    },
    image:{
        width:100,
        height:100,
        marginTop:50
    },
    botao:{
        alignItems:"center"
    }
})