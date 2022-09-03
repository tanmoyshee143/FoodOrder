import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyOrder = ({navigation}) => {
  console.log('qqqqqq', navigation);
  return (
    <View>
      <View
        style={{
          
          flexDirection: 'row',
          width: '99%',
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-start',
          marginTop: 5,
        }}>
        <TouchableOpacity
          style={{
            
            width: 20,
            height: 20,
          }}>
          <Icon name="chevron-left" size={20} color="red" />
        </TouchableOpacity>
        <Text style={{fontFamily: 'poppins_semibold', fontSize: 20}}>
          MY ORDER
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          height: 450,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: 120, height: 120, borderRadius: 50}}>
          <Icon name="shopping-cart" size={120} color="#FA99B1" />
        </View>
        <Text style={{fontFamily: 'poppins_semibold', fontSize: 30}}>
          No Order Yeat
        </Text>
        <Text style={{fontFamily: 'poppins_semibold', fontSize: 15,alignSelf:"center"}}>
          Hit the orange button down below to Create an order
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            width: 314,
            height: 70,
            backgroundColor: '#FF5800',
            borderRadius: 50,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() => {
            navigation.navigate('HomeTabs', {screen: 'Home'});
          }}>
          <Text
            style={{
              fontFamily: 'poppins_semibold',
              fontSize: 20,
              color: 'white',
            }}>
            Start Ordering
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyOrder;
