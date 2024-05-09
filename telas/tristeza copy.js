import React, {Component} from "react";
import {View, Text, Image, StyleSheet,TouchableOpacity} from "react-native";
export default class T extends Component {
render (){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tudo bem pensar nos seus afazeres durante o dia, mas se isso afetar outras partes da sua vida como o seu sono, 
            procure psicológo.</Text>
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