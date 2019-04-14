// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
//
// import React, {Component} from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   Alert,
//    } from 'react-native';
//
// import {
//   createAppContainer,
//   } from 'react-navigation';
//
// export default class Banana extends Component<Props> {
//    heart_pressed() {
//      Alert.alert(
//   'You have touched the Banana',
//   '',
//   [
//     {text: 'OK', onPress: () => console.log('OK Pressed')},
//   ],
//   {cancelable: false},
// );
//    }
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'
//     };
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//         onPress={()=>this.heart_pressed()}
//         >
//           <Image
//           source={pic}
//           style={styles.heart}/>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// // export default Banana;
//
//
// const styles = StyleSheet.create({
//   heart: {
//     width: 200,
//     height: 200
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//
// });
//
// // export default createAppContainer(Tabnavigator);
