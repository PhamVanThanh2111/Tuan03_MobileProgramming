import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen2_a = ({ navigation }) => {
  return (
    <LinearGradient style={styles.container}
    colors={['#FACA00', '#BF9A00']}
    locations={[0, 1]}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.textFieldContainer}>
        <View style={styles.textField}>
        <Image style={styles.iconTextField} source={require('../Images/user.png')} />
          <Text style={styles.textInTextField}>Name</Text>
        </View>
        <View style={styles.textField}>
        <Image style={styles.iconTextField} source={require('../Images/lock.png')} />
          <Text style={styles.textInTextField}>Password</Text>
          <Image style={styles.eye} source={require('../Images/eye.png')} />
        </View>
      </View>
      <View style={styles.buttonContainer1}>
        <TouchableOpacity style={styles.button1}
        onPress={() => navigation.navigate('ScreenXMEye')}>
          <Text style={styles.buttonText1}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer2}>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: 'auto',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  textFieldContainer: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textField: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#DCBE3B',
    width: 330,
    height: 54,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  eye: {
    width: 38,
    height: 38,
  },
  iconTextField: {
    height: 32,
    width: 32,
  },
  buttonContainer1: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer2: {
    flex: 3.5,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  buttonText1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  button1: {
    backgroundColor: 'black',
    height: 45,
    width: 330,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button2: {
    height: 45,
    width: 330,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textInTextField: {
    marginLeft: 10,
    flex: 9,
  },
});

export default Screen2_a;
