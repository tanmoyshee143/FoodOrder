import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

const GetStarted = ({navigation}) => {
  console.log('shee');
  return (
    <View style={styles.container}>
      <View style={styles.imageTop}>
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://i.ibb.co/ZXkrc1c/Image1.png'}}
        />
        {/* <Image
        style = {styles.tinyLogo}
          source={require('../../images/foodIcon.svg')}
        /> */}
      </View>
      {/* <View style={styles.foodTop}>
        <Text style={styles.foodText}> Food For Everyone </Text>
      </View> */}

      {/* <View
        style={{
          height: 434,
          width: '100%',
          marginTop:-25,
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 434,
            width: '50%',
           zIndex:9999,
            justifyContent: 'center',
          }}>
          <Image
            style={styles.image3}
            source={{
              uri: 'https://i.ibb.co/37j78JG/Toy-Faces-Tansparent-BG-49.png',
            }}
          />
        </View>
        <View
          style={{
            height: 434,
            width: '50%',
            
            justifyContent: 'center',
          }}>
          <Image
            style={styles.image2}
            source={{
              uri: 'https://i.ibb.co/4JqVyNP/Toy-Faces-Tansparent-BG-29.png',
            }}
          />
        </View>
      </View> */}
      {/* <View >
        <View style={styles.imagebottom1}>
        <Image
        style = {styles.image2}
          source={{uri:"https://i.ibb.co/4JqVyNP/Toy-Faces-Tansparent-BG-29.png"}}/>
      </View >

      <View style={styles.imagebottom2}>
        <Image
        style = {styles.image3}
          source={{uri:"https://i.ibb.co/37j78JG/Toy-Faces-Tansparent-BG-49.png"}}/>
      </View >
      </View> */}

      <TouchableOpacity
        style={styles.gStarted}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.gText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4B3A',
  },
  gStarted: {
    width: 314,
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 236,
  },

  gText: {
    fontSize: 20,
    lineHeight: 22,
    color: '#FF460A',
  },
  tinyLogo: {
    width: 46,
    height: 50,
  },
  imageTop: {
    width: 84,
    height: 84,
    top: 45,
    left: 30,
    borderRadius: 41,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodTop: {
    marginTop: 76,
    width: 275,
    height: 112,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodText: {
    fontFamily: 'Poppins-Thin',
    fontSize: 55,
    lineHeight: 60,
    color: '#FFFFFF',
  },
  imagebottom1: {
    width: 205,
    height: 278,
    marginTop: 21,
    left: 201,
    borderRadius: 41,
    backgroundColor: '#FF4B3A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    width: 185,
    height: 258,
  },
  imagebottom2: {
    width: 208,
    height: 274,
    marginTop: 21,
    left: 1,
    borderRadius: 41,
    backgroundColor: '#FF4B3A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image3: {
    width: 285,
    height: 358,
  },
});
