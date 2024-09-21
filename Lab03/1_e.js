import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen1_e = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>REGISTER</Text>
      </View>
      <View style={styles.textFieldContainer}>
        <View style={styles.textField1}>
          <Text>Name</Text>
        </View>
        <View style={styles.textField1}>
          <Text>Phone</Text>
        </View>
        <View style={styles.textField1}>
          <Text>Email</Text>
        </View>
        <View style={styles.textField2}>
          <Text>Password</Text>
          <Image style={styles.eye} source={require('./eye.png')} />
        </View>
        <View style={styles.textField1}>
          <Text>Birthday</Text>
        </View>
      </View>
      <View style={styles.radioContainer}>
        <View style={styles.radioButton}></View>
        <View style={styles.radioButtonText}>
          <Text>Male</Text>
        </View>
        <View style={styles.radioButton}></View>
        <View style={styles.radioButtonText}>
          <Text>Female</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Screen2_a')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
      <Text>When you agree to terms and conditions</Text>
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
    flex: 6,
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
  radioContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButton: {
    borderWidth: 2,
    borderRadius: '50%',
    width: 23,
    height: 23,
    marginLeft: 10,
  },
  radioButtonText: {
    marginLeft: 10,
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
  footer: {
    flex: 1,
  }
});

export default Screen1_e;
