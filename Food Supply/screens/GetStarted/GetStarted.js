// 

import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity,ImageBackground,Dimensions} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const scrreenHeight = Dimensions.get('window').height -100

console.log(scrreenHeight)
const GetStarted = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <ImageBackground
            resizeMode='stretch'
        style = {{flex:1,justifyContent:'center'}}
          // source={{uri:"https://i.ibb.co/p336Sf2/i-Phone-11-Pro-Max-1-2.png"}}
          source={require('../../../img/foodsplash.png')}
          >
            <TouchableOpacity
        style={styles.gStarted}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.gText}>Get Started</Text>
      </TouchableOpacity> 
          </ImageBackground>

           
        </View>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
gStarted: {
    width: 314,
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:scrreenHeight,
  },

  gText: {
    fontSize: 20,
    lineHeight: 22,
    color: '#FF460A',
  },
})