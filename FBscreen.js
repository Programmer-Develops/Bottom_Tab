import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class FB extends React.Component{
    render() {
        return(
            <View style={style.itemsSTYLE}>
              <Text style={style.TEXTstyles}>Facebook</Text>
            </View>
        )
    }
}

const style= StyleSheet.create({

  TEXTstyles: {
    backgroundColor:"skyblue",
    borderColor:"black", 
    color:"navyblue"
  },

  itemsSTYLE: {
    backgroundColor:"darkblue",
    flex:1, 
    justifyContent:"center", 
    alignItems:"center"
  }

})