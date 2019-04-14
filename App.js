/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Button,
  TextInput,
  AppRegistry,
  ScrollView,
   } from 'react-native';

import {
 createStackNavigator,
 createAppContainer,
 withNavigation
  } from 'react-navigation';


// default working Home Heart Screen
class Heart extends Component {

  // onPress leads to other screens
  _onPressButtonApple() {
    console.log('apple debug');
    console.log(this.props);
    this.props.navigation.navigate('Apple');
  }
  _onPressButtonBanana() {
      this.props.navigation.navigate('Banana');
    }

   heart_pressed() {
     Alert.alert(
  'You have touched the Heart',
  '',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);
   }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_corazón.svg/1200px-Heart_corazón.svg.png'
    };
    return (
      <View style={styles.container}>
        <TouchableOpacity
        onPress={()=>this.heart_pressed()}
        >
          <Image
          source={pic}
          style={styles.heart}/>
        </TouchableOpacity>




        <Button
            onPress={()=>this._onPressButtonApple()}
            title="Apple"
            color="#DE1738"
          />


          <Button
            onPress={()=>this._onPressButtonBanana()}
            title="Banana"
            color="#FFFF33"
          />


      </View>

    );
  }
}


// default working Apple
class Apple extends Component {

// Constructor for Text input
  constructor(props) {
    super(props);
    this.state = { text: '', reavealedtext: '' };
  }

  changeState(){
    this.setState({
      reavealedtext: this.state.text
      })



  }

   heart_pressed() {
     Alert.alert(
  'You have touched the Apple',
  '',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);
   }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Honeycrisp-Apple.jpg'
    };
    return (
      <View style={styles.container}>
        <TouchableOpacity
        onPress={()=>this.heart_pressed()}
        >
          <Image
          source={pic}
          style={styles.heart}/>
        </TouchableOpacity>
        <ScrollView>
          <Text style={{fontSize:30}}>{this.state.reavealedtext}</Text>
        </ScrollView>



        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text: text})}
        value={this.state.text}
        placeholder="Type here!"
      />

        <Button
  onPress={()=>this.changeState()}
  title="Add Text to Scrollable List"
  color="#000000"
/>

      </View>
    );
  }
}

// default working Banana
class Banana extends Component {
   heart_pressed() {
     Alert.alert(
  'You have touched the Banana',
  '',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);
   }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'
    };
    return (
      <View style={styles.container}>
        <TouchableOpacity
        onPress={()=>this.heart_pressed()}
        >
          <Image
          source={pic}
          style={styles.heart}/>
        </TouchableOpacity>

        
          <Button
    onPress={()=>this.learn_pressed()}
    title="Fetch"
    color="#000000"
  />
  <Button
onPress={()=>this.learn_pressed()}
title="Clear"
color="#000000"
/>

      </View>
    );
  }
}


const Apps = createStackNavigator({
  Heart: {screen: Heart},
  Apple: {screen: Apple},
  Banana: {screen: Banana}

  });

const AppContainer = createAppContainer(Apps);

export default AppContainer;


const styles = StyleSheet.create({
  heart: {
    width: 200,
    height: 200
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});
