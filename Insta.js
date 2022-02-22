import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Insta extends React.Component{
    render() {
        return(
            <View style={style.itemsSTYLES}>
              <Text style={style.TEXTstyles}>INSTAGRAM</Text>
            </View>
        )
    }
}

const style= StyleSheet.create({

  TEXTstyles: {
    backgroundColor:"lightpink",
    borderColor:"black", 
    color:"purple"
  },

  itemsSTYLES: {
    backgroundColor:"darkpink",
    flex:1, 
    justifyContent:"center", 
    alignItems:"center"
  }

})