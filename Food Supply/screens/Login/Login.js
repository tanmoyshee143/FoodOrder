import React from 'react';
import {SafeAreaView, StyleSheet, Image, Text, View, TextInput} from 'react-native';
import {WebView} from 'react-native-webview';


const Login = () => {
  console.log('shee');
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Image source={{uri: 'https://i.ibb.co/1bbqnRQ/Group-3.png'}} />
        <Text style={styles.topText}>Login</Text>
        <Text style={styles.topText}>Food For Everyone</Text>
      </View>
      <View>
        <Text style={styles.uiText}>User Id</Text>
        <TextInput style={styles.inputStyle}>

        </TextInput>

        <Text style={styles.uiText}>Pasword</Text>
        <TextInput style={styles.inputStyle}>

        </TextInput>
        <View>
          <Text style={styles.uiText}>Forget Your Pasword?</Text>
        </View>
      </View>
    </View>
    // <WebView source={{ uri: 'https://digitalseva.csc.gov.in/' }} />
  );
};

export default Login;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    borderRadius: 20,
    backgroundColor: '#aaaa80',
  },
  topView: {
    width: '100%',
    height: 284,
    left: 0,
    top: 1,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontStyle: 'normal',
    fontSize: 40,
    // lineHeight:"60%",
    latterspacing: -3,
    color: '#ff4f00',
  },

  uiText: {
    fontStyle: 'regular',
    fontSize: 18,
    lineHeight:25,
    mergintop:5,
    marginBottom:5,
    latterspacing: -3,
    color: '#ff34b3',
  },
  inputStyle:{
    fontFamily:"regular",
    fontSize:18,
    borderWidth:1,
    borderColor:"#ff34b3",
    paddingHorizontal:15,
    paddingVertical:7,
    borderRadius:2,
    backgroundColor:"white"

  }
});
