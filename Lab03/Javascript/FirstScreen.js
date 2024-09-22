import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCircle}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>GROW{'\n'}YOUR BUSINESS</Text>
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.content}>
          We will help you to grow your business using{'\n'}online server
        </Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen1_a')}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00CCF9',
  },
  containerCircle: {
    flex: 7,
    display: 'flex',
    justifyContent: 'center',
  },
  circle: {
    height: 140,
    width: 140,
    borderRadius: 70,
    borderWidth: 15,
  },
  containerTitle: {
    flex: 2,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  containerContent: {
    flex: 4,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  containerButton: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  button: {
    backgroundColor: '#E3C000',
    padding: 10,
    borderRadius: 5,
    width: 119,
    height: 48,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FirstScreen;