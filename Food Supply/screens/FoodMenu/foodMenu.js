import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FoodMenu = () => {
  const DATA = [
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
  ];

  const [menuId, setMenuId] = useState('1');
  const [search, setSearch] = useState('');

  const newSearch = () => {
    console.log('newSearch', search);
  };

  const menuFood = id => {
    console.log('FOODS', id);
    setMenuId(id);
  };

  const renderItem = ({item}) => {
    // console.log(item);
    return (
      <View style={styles.menubar}>
        <TouchableOpacity
          style={{
            width: 80,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            menuFood(item.id);
          }}>
          <Text
            style={{
              color: menuId == item.id ? '#FA4A0C' : '#000000',
              fontFamily: 'poppins_regular',
              fontSize: 17,
            }}>
            {item.title}
          </Text>
          <View
            style={{
              width: 80,
              height: 3,
              backgroundColor: menuId == item.id ? '#FA4A0C' : '#DED7D5',
              marginTop: 5,
            }}></View>
        </TouchableOpacity>
      </View>
    );
  };

  console.log('foodmenu');
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
          {/* <Text>FoodMenu</Text> */}
          <Icon name="cart" size={24} />
        </TouchableOpacity>
      </View>
      <View style={{width: 215, height: 85, marginLeft: 36}}>
        <Text
          style={{fontFamily: 'poppins_bold', fontSize: 30, color: '#000000'}}>
          Delicious food for you
        </Text>
      </View>
      <View style={styles.searchView}>
        <TouchableOpacity
          style={{
            width: '15%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            newSearch();
          }}>
          {/* <Text>FoodMenu</Text> */}
          <FontAwesome name="search" size={24} />
        </TouchableOpacity>
        <View
          style={{
            width: '85%',
            height: 50,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <TextInput
            style={{fontSize: 17}}
            placeholder="Search"
            onChangeText={newSearch => setSearch(newSearch)}
            defaultValue={search}></TextInput>
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FoodMenu;

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
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    height: 55,
    marginTop: 25,
    backgroundColor: '#F1EBE9',
    borderRadius: 35,
    alignSelf: 'center',
  },
  menubar: {
    flexDirection: 'row',
    width: 80,
    height: 50,
    margin: 10,
    backgroundColor: '#DED7D5',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
});
