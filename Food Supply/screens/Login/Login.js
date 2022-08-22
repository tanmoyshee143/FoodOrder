import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Login = ({navigation}) => {
  console.log('shee');

  const [loginStatus, setloginStatus] = useState(true);

  const [signupstatus, setsignupstatus] = useState(false);

  const [lCheckBox, setlCheckBox] = useState(false);
  const [text, setText] = useState('');
  const [pasword, setPasword] = useState('');
  const [name, setName] = useState('');
  const [sEmail, setsEmail] = useState('');
  const [mNumber, setmNumber] = useState('');

  const selectLogin = () => {
    console.log('selectLogin');
    setloginStatus(true);
    setsignupstatus(false);
    console.log('loginStatus==', loginStatus, 'signupstatus==', signupstatus);
  };

  const selectSignup = () => {
    console.log('selectSignup');
    setsignupstatus(true);
    setloginStatus(false);
    console.log('loginStatus==', loginStatus, 'signupstatus==', signupstatus);
  };

  const textInputDetaLogin = () => {
    console.log('text', text, 'pasword', pasword, 'lCheckBox', lCheckBox);
    if (text != '' && pasword != '' && lCheckBox == true) {
      navigation.navigate('HomeTabs');
    }
  };

  const textInputDetaSignup = () => {
    console.log('name', name, 'sEmail', sEmail, "mNumber", mNumber, 'lCheckBox', lCheckBox);
    if (name != '' && sEmail != '' && mNumber != "" && lCheckBox == true) {
      navigation.navigate('HomeTabs');
    }
  };

  return (
    <ScrollView style={styles.mainView}>
      
        <View style={styles.topView}>
          <ImageBackground
            resizeMode="stretch"
            style={{width: '100%', height: '100%', justifyContent: 'center'}}
            source={{uri: 'https://i.ibb.co/gwQqSxz/top-image.jpg'}}>
            <Text style={styles.topText}>Welcome</Text>
            <Text style={styles.topText1}>Food For Everyone</Text>
          </ImageBackground>

          {/* <Image source={require("../../images./top image.jpg")}></Image> */}
        </View>
        <View style={styles.topView1}>
          <TouchableOpacity
            style={{
              width: '50%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              selectLogin();
            }}>
            <Text>Login</Text>
            <View
              style={{
                width: '50%',
                height: 3,
                backgroundColor: loginStatus ? '#FA4A0C' : '#FFFFFF',
                marginTop: 5,
              }}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              selectSignup();
            }}
            style={{
              width: '50%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Signup</Text>
            <View
              style={{
                width: '50%',
                height: 3,
                backgroundColor: signupstatus ? '#FA4A0C' : '#FFFFFF',
                marginTop: 5,
              }}></View>
          </TouchableOpacity>
        </View>
        {loginStatus && (
          <View>
            <Text style={styles.uiText}>User Id</Text>
            <TextInput
              style={styles.inputStyle}
              autoCapitalize="none"
              placeholder="Enter your email"
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}></TextInput>

            <Text style={styles.uiText}>Pasword</Text>
            <TextInput
              style={styles.inputStyle}
              secureTextEntry={true}
              placeholder="Enter your pasword"
              onChangeText={newPasword => setPasword(newPasword)}
              defaultValue={pasword}></TextInput>
            <View>
              <Text style={styles.uiText}>Forget Your Pasword?</Text>
            </View>
          </View>
        )}

        {signupstatus && (
          <View>
            <Text style={styles.uiText}>Full Name</Text>
            <TextInput style={styles.inputStyle}
            placeholder="Enter your Full Name"
            onChangeText={newName => setName(newName)}
            defaultValue={name}></TextInput>

            <Text style={styles.uiText}>Email Id</Text>
            <TextInput style={styles.inputStyle}
            placeholder="Enter your email"
            onChangeText={newsEmail => setsEmail(newsEmail)}
            defaultValue={sEmail}></TextInput>

            <Text style={styles.uiText}>Mobile Number</Text>
            <TextInput style={styles.inputStyle}
            placeholder="Enter your mobile number"
            onChangeText={newmNumber => setmNumber(newmNumber)}
            defaultValue={mNumber}></TextInput>
          </View>
        )}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            value={lCheckBox}
            onValueChange={newValue => setlCheckBox(newValue)}></CheckBox>
          <Text> I have reed and agreed all the </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TermCondition');
            }}>
            <Text style={{color: 'blue'}}>T&C</Text>
          </TouchableOpacity>
        </View>

        {loginStatus && (
          <View style={{width: '100%', height: 150}}>
            <TouchableOpacity
              style={styles.lButton}
              onPress={() => {
                textInputDetaLogin();
              }}>
              <Text style={styles.lBText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
        {signupstatus && (
          <View style={{width: '100%', height: 150}}>
            <TouchableOpacity
              style={styles.lButton}
              onPress={() => {
                textInputDetaSignup();
              }}>
              <Text style={styles.lBText}>Signup</Text>
            </TouchableOpacity>
          </View>
        )}
      
    </ScrollView>

    // <WebView source={{ uri: 'https://digitalseva.csc.gov.in/' }} />
  );
};

export default Login;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
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
  topView1: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topText: {
    fontStyle: 'normal',
    fontSize: 40,
    // lineHeight:"60%",
    latterspacing: -3,
    alignSelf: 'center',
    color: '#ff4f00',
  },
  topText1: {
    fontStyle: 'normal',
    fontSize: 30,
    // lineHeight:"60%",
    latterspacing: -3,
    alignSelf: 'center',
    color: '#ff4f00',
  },

  uiText: {
    fontStyle: 'regular',
    fontSize: 18,
    lineHeight: 25,
    mergintop: 5,
    marginBottom: 5,
    latterspacing: -3,
    color: '#ff34b3',
  },
  inputStyle: {
    fontFamily: 'regular',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ff34b3',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 2,
    backgroundColor: 'white',
  },

  lButton: {
    width: 294,
    height: 70,
    backgroundColor: '#FF5800',
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  lBText: {
    fontSize: 25,
    lineHeight: 22,
    color: '#00ee00',
  },
});
