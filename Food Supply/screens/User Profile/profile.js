import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  console.log('profile');
  return (
    <View>
      <View style={{width: 100, height: 36, marginLeft: 16, marginTop: 19}}>
        <Text style={{fontFamily:"poppins_bold",fontSize: 28, lineHeight: 31, color: 'blue'}}>
          Profile
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#2853C0',
          width: '95%',
          height: 90,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 12,
          borderRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',

            width: '95%',
            height: 60,
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              marginLeft: 10,
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
              }}
              source={require('../../../img/profilepic.jpg')}
            />
          </View>
          <View
            style={{
              width: 200,
              height: 45,
              marginLeft: 10,
            }}>
            <Text
              style={{
                fontFamily: 'poppins_semibold',
                fontSize: 20,
                color: 'white',
              }}>
              Siasat Daily
            </Text>
            <Text
              style={{
                fontFamily: 'poppins_regular',
                fontSize: 15,
                color: 'white',
              }}>
              dailysiasat@gmail.com
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              marginRight: 15,
            }}>
            <Icon name="pencil" size={28} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: '98%',
          height: 425,
          marginTop: 19,
          borderRadius:5,
          borderWidth: 3,
          borderColor: '#1931B6',
          alignSelf:"center",
        }}>
        <View
          style={{
            width: '95%',
            height: 90,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 12,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#F67070',
          }}>
          <View
            style={{
              flexDirection: 'row',

              width: '95%',
              height: 60,
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginLeft: 5,
                backgroundColor: '#DBDEE6',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="user" size={40} color="#377BD0" />
            </View>
            <View
              style={{
                width: 180,
                height: 45,
                marginLeft: 1,
              }}>
              <Text
                style={{
                  fontFamily: 'poppins_semibold',
                  fontSize: 18,
                  color: '#0E2290',
                }}>
                My Account
              </Text>
              <Text
                style={{
                  fontFamily: 'poppins_regular',
                  fontSize: 11,
                  color: '#0E2290',
                }}>
                Make Change To Your Account
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                borderRadius: 8,
                marginRight: 5,
              }}>
              <Icon name="info-circle" size={20} color="#F67070" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                borderRadius: 8,
                marginRight: 5,
              }}>
              <Icon name="chevron-right" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '95%',
            height: 90,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 12,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#F67070',
          }}>
          <View
            style={{
              flexDirection: 'row',

              width: '95%',
              height: 60,
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginLeft: 5,
                backgroundColor: '#DBDEE6',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="flickr" size={40} color="#377BD0" />
            </View>
            <View
              style={{
                width: 180,
                height: 45,
                marginLeft: 1,
              }}>
              <Text
                style={{
                  fontFamily: 'poppins_semibold',
                  fontSize: 18,
                  color: '#0E2290',
                }}>
                Two factor security
              </Text>
              <Text
                style={{
                  fontFamily: 'poppins_regular',
                  fontSize: 11,
                  color: '#0E2290',
                }}>
                Phone secruty strength
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                borderRadius: 8,
                marginRight: 5,
              }}>
              <Icon name="info-circle" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                borderRadius: 8,
                marginRight: 5,
              }}>
              <Icon name="chevron-right" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '95%',
            height: 90,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 12,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#F67070',
          }}>
          <View
            style={{
              flexDirection: 'row',

              width: '95%',
              height: 60,
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginLeft: 5,
                backgroundColor: '#DBDEE6',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="lock" size={40} color="#377BD0" />
            </View>
            <View
              style={{
                width: 180,
                height: 45,
                marginLeft: 1,
              }}>
              <Text
                style={{
                  fontFamily: 'poppins_semibold',
                  fontSize: 18,
                  color: '#0E2290',
                }}>
                Face Id/Touch Id
              </Text>
              <Text
                style={{
                  fontFamily: 'poppins_regular',
                  fontSize: 11,
                  color: '#0E2290',
                }}>
                Manage your device security
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 50,
                height: 40,
                borderRadius: 8,
                marginRight: 5,
              }}>
              <Icon name="toggle-off" size={40} color="#394DB8" />
            </TouchableOpacity>
            
          </View>
        </View>
        <View
          style={{
            width: '95%',
            height: 90,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 12,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#F67070',
          }}>
          <View
            style={{
              flexDirection: 'row',

              width: '95%',
              height: 60,
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginLeft: 5,
                backgroundColor: '#DBDEE6',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="sign-out" size={40} color="#377BD0" />
            </View>
            <View
              style={{
                width: 180,
                height: 45,
                marginLeft: 1,
              }}>
              <Text
                style={{
                  fontFamily: 'poppins_semibold',
                  fontSize: 18,
                  color: '#0E2290',
                }}>
                Log Out
              </Text>
              <Text
                style={{
                  fontFamily: 'poppins_regular',
                  fontSize: 11,
                  color: '#0E2290',
                }}>
                Secure your account for safety 
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                borderRadius: 8,
                marginRight: 5,
              }}>
              <Icon name="info-circle" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                borderRadius: 8,
                marginRight: 5,
              }}>
              <Icon name="chevron-right" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </View>
  );
};

export default Profile;
