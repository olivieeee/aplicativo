import React, {Component} from "react";
import {View, Text, Image, StyleSheet,TouchableOpacity} from "react-native";
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
export default class Jogodoestresse extends Component {
render (){
    return (
        <WebView
          style={styles.container}
          source={{ uri: "https://www.friv.com/z/games/superonionboy/game.html" }}
        />
      );
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