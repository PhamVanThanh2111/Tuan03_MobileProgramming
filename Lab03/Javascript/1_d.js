import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen1_d = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.textFieldContainer}>
        <View style={styles.textField1}>
          <Text>Email</Text>
        </View>
        <View style={styles.textField2}>
          <Text>Password</Text>
          <Image style={styles.eye} source={require('../Images/eye.png')} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Screen1_e')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pContainer}>
        <Text style={styles.p}>When you agree to terms and conditions</Text>
        <Text style={styles.a}>For got your password?</Text>
        <Text style={styles.p}>Or login with</Text>
      </View>
      <View style={styles.socialContainer}>
        <View style={styles.iconContainerFacebook}>
          <Image style={styles.icon} source={require('../Images/facebook.png')} />
        </View>
        <View style={styles.iconContainerZalo}>
          <Image style={styles.icon} source={require('../Images/zalo.png')} />
        </View>
        <View style={styles.iconContainerGoogle}>
          <Image style={styles.icon} source={require('../Images/google.png')} />
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
    backgroundColor: '#D8EFDF',
  },
  titleContainer: {
    flex: 1.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textFieldContainer: {
    flex: 2.75,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textField1: {
    backgroundColor: '#CAE1D1',
    width: 330,
    height: 54,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  textField2: {
    backgroundColor: '#CAE1D1',
    width: 330,
    height: 54,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  eye: {
    width: 38,
    height: 38,
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
    fontWeight: 'bold',
    color: '#D8EFDF',
  },
  button: {
    backgroundColor: '#C34E3B',
    height: 45,
    width: 330,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  pContainer: {
    flex: 2,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  p: {
    fontSize: 14,
  },
  a: {
    fontSize: 14,
    color: '#5D25FA',
  },
  socialContainer: {
    flex: 1,
    width: 330,
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainerFacebook: {
    height: 45,
    width: 110,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B5998',
  },
  iconContainerZalo: {
    height: 45,
    width: 110,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0068FF',
  },
  iconContainerGoogle: {
    height: 45,
    width: 110,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8EFDF',
    borderColor: '#0068FF',
    borderWidth: 1,
  },
  icon: {
    height: 35,
    width: 35,
  },
});

export default Screen1_d;
