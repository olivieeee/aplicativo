import React, {Component} from "react";
import {View, Text, Image, StyleSheet,TouchableOpacity} from "react-native";
export default class Tristeza extends Component {
render (){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Não deixe esse sentimento 
negativo te abalar, caso os sintomas sejam muito persistentes, procure um psicólogo.</Text>
<TouchableOpacity>
    <Image source={require("../assets/botao.png")} style={styles.image}>

    </Image>
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