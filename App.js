import React from 'react';
import {StyleSheet,View,Button,Text} from 'react-native';
import Card from './components/Card'




class App extends React.Component {

  state = {
    number: 0
  }
  onPressIncrease = () => {
    this.setState({
      number: --this.state.number
    })
  }

  onPressDecrease = () => {
    this.setState({
      number: ++this.state.number
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.state.number}</Text>
        </View>
        <View style={styles.buttons}>
        <Button 
          title = "Increase"
          color = "#000"
          onPress = {this.onPressIncrease}
        />
         <Button 
          title = "Decrease"
          color = "#000"
          onPress = {this.onPressDecrease}
        />
        </View>
        
    </View>
    )
  }
}




const styles = StyleSheet.create({
    container : {
      flex:1,
      alignItems: "center",
      justifyContent: "center",
    },
    buttons : {
      flexDirection: "row"
    }
});

export default App;





