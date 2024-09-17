import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen1_b = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']} 
      locations={[0, 0.2, 0.6, 0.95, 1]}
      style={styles.container}>
      <View style={styles.containerLock}>
        <Image
          style={styles.lock}
          source={require('./lock.png')}
        />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>FORGET{'\n'}PASSWORD</Text>
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.content}>
          Provide your account's email for which you{'\n'}want to reset your
          password
        </Text>
      </View>
      <View style={styles.containerMail}>
        <Image style={styles.mailImage} source={require('./email.png')} />
        <View style={styles.mailContent}>
          <Text>Mail</Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Screen1_c')}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLock: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  lock: {
    height: 117,
    width: 105,
  },
  containerTitle: {
    flex: 2,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  containerButton: {
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  button: {
    backgroundColor: '#E3C000',
    padding: 10,
    borderRadius: 5,
    width: 305,
    height: 45,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerMail: {
    flex: 1.75,
    backgroundColor: '#C4C4C4',
    height: 45,
    width: 305,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mailImage: {
    height: 35,
    width: 35,
    marginLeft: 5,
  },
  mailContent: {
    width: 260,
    height: 45,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
  },
});

export default Screen1_b;
