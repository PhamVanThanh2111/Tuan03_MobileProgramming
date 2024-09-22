import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ScreenXMEye = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.eyeImg} source={require('../Images/eyeXMEye.jpg')}></Image>
      </View>
      <View style={styles.textFieldContainer}>
        <View style={styles.textField}>
          <Image style={styles.eye} source={require('../Images/personXMEye.png')}></Image>
          <Text style={styles.textInTextField}>Please input user name</Text>
        </View>
        <View style={styles.textField}>
          <Image style={styles.eye} source={require('../Images/lockXMEye.png')}></Image>
          <Text style={styles.textInTextField}>Please input password</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.directionContainer}>
        <Text>Register</Text>
        <Text>Forgot Password</Text>
      </View>
      <View style={styles.pSocial}>
        <View style={styles.line}></View>
        <Text>Other Login Methods</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.socialContainer}>
        <View style={styles.social}>
          <Image style={styles.imgSocial} source={require('../Images/addPerson.png')} />
        </View>
        <View style={styles.social}>
          <Image style={styles.imgSocial} source={require('../Images/wifi.png')} />
        </View>
        <View style={styles.social}>
          <Image style={styles.imgSocial} source={require('../Images/facebook.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imgContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  eyeImg: {
    width: 100,
    height: 100,
  },
  textFieldContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textField: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    width: 330,
    height: 54,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  textInTextField: {
    marginLeft: 15,
    flex: 8,
    color: '#C4C4C4',
    fontSize: 18,
  },
  eye: {
    width: 32,
    height: 32,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#D8EFDF',
  },
  button: {
    backgroundColor: '#386FFC',
    height: 45,
    width: 330,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  directionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 330,
  },
  line: {
    width: 55,
    borderTopWidth: 2,
    height: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'blue',
  },
  pSocial: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space around',
    alignItems: 'center',
  },
  social: {
    width: 74,
    height: 74,
  },
  imgSocial: {
    height: 45,
    width: 45,
  },
});

export default ScreenXMEye;
