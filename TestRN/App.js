/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Children, Component } from 'react';
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextPropTypes,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
class App extends Component {
  render() {
    return (
      <View
        style={styles.view}
      >
        <BTNTest messengebtn ="BUTTON 1"  />
        <BTNTest />
      </View>
    )
  }
}

class BTNTest extends Component{
  render(){
    return(
      <View>
        <TouchableOpacity style={styles.button} onPress ={() => Alert.alert('THIS IS BUTTON ')}>
          <Text style={styles.sectionTitle}>{this.props.messengebtn}</Text>
          </TouchableOpacity>
      </View>
    )
  }
  }
  BTNTest.defaultProps = {
  messengebtn : 'BUTTON 2',
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 52,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    margin: 15,
    color: "white",
    textAlign: 'center',
    marginVertical: 10
  },
  button: {
    backgroundColor: 'red',
    marginHorizontal:100, 
    borderRadius: 10,
    margin : 20,
    marginVertical: 5
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    margin: 15,
    marginTop: 10,
    padding  : 10
  }

});

export default App;

