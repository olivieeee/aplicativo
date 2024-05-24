import React, {Component} from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import * as Font from "expo-font";

let customFonts = {
    "conforta": require("../assets/fonte/Comfortaa-VariableFont_wght.ttf"),
  };
  
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
        };
        
      }
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
    componentDidMount(){
        this._loadFontsAsync()
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
        fontSize:30,
        fontFamily:"conforta"
    }
})