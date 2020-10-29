import React from 'react';
import {StyleSheet,View,Text} from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.hello}>Hello</Text>
    </View>
  )
      
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      alignItems: "center",
      justifyContent: "center",
    },
    hello:{
      backgroundColor: "red",
      fontSize: 32,
      width: 110,
      height: 45,
      paddingLeft: 20,
      borderRadius: 10
    }
});

export default App;
