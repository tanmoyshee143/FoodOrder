import React, {useState} from 'react';
import {FlatList, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MyFabourite = () => {
  const fabouriteData = [
    {
      id: '1',
      title: 'Foods',
    },
    {
      id: '2',
      title: 'Drinks',
    },
    {
      id: '3',
      title: 'Snacks',
    },
    {
      id: '4',
      title: 'Sauce',
    },
    {
      id: '5',
      title: 'Juse',
    },
  ];

  const [fabouriteMenuId, setFabouritemenuId] = useState('1');

  const fabouriteFood = id => {
    console.log('CHICKEN RICE', id);
    setFabouritemenuId(id);
  };

  const renderItem = ({item}) => {
    // console.log(item);
    return (
      <View style={{flexDirection: 'row',
      width: 80,
      height: 50,
      margin: 10,
      backgroundColor: '#DED7D5',
      // justifyContent: 'space-between',
      alignItems: 'center',}}>
        <TouchableOpacity
          style={{
            width: 80,
            height: 40,
            alignItems: 'center',
          }}
          onPress={() => {
            fabouriteFood(item.id);
          }}>
          <Text
            style={{color: fabouriteMenuId == item.id ? '#FA4A0C' : '#000000', fontFamily: 'poppins_bold', fontSize: 15}}>
            {item.title}
          </Text>
          <View
            style={{
              width: 80,
              height: 3,
              backgroundColor: fabouriteMenuId == item.id ? '#FA4A0C' : '#DED7D5',
              marginTop: 5,
            }}></View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={{
            width: 22,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 30,
          }}
          onPress={() => {
            console.log('menu');
          }}>
          <Icon name="menu" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 24,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 30,
          }}
          onPress={() => {
            console.log('cart');
          }}>
          <Icon name="cart" size={24} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 85,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{fontFamily: 'poppins_bold', fontSize: 25, color: 'orange'}}>
          YOUR FABOURITE
        </Text>
        <Text
          style={{fontFamily: 'poppins_bold', fontSize: 25, color: 'orange'}}>
          ITEMS LIST
        </Text>
      </View>
        <FlatList
          horizontal={true}
          data={fabouriteData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    </View>
  );
};

export default MyFabourite;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#DED7D5',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
  },
});
