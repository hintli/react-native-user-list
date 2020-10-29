import React from 'react';
import {StyleSheet,View,Button,Text} from 'react-native';
import Card from './components/Card'




class App extends React.Component {

  state = {
    name: "Mehmet"
  }
  onChangeName = () => {
    this.setState({
      name: "Hüseyin"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.state.name}</Text>
        </View>
        <Button 
          title = "Detail"
          color = "#000"
          onPress = {this.onChangeName}
        />
    </View>
    )
  }
}




const styles = StyleSheet.create({
    container : {
      flex:1,
      alignItems: "center",
      justifyContent: "center",
    }
});

export default App;





