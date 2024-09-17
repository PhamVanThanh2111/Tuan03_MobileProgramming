import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen1_c = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']} 
      locations={[0, 0.2, 0.6, 0.95, 1]}
      style={styles.container}>
      <View style={styles.containerHeader}>
      <Text style={styles.headerContent}>CODE</Text>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>VERIFICATION</Text>
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.content}>
          Enter ontime password sent on{'\n'}++849092605798
        </Text>
      </View>
      <View style={styles.containerVerification}>
        <View style={styles.verificationRec}></View>
        <View style={styles.verificationRec}></View>
        <View style={styles.verificationRec}></View>
        <View style={styles.verificationRec}></View>
        <View style={styles.verificationRec}></View>
        <View style={styles.verificationRecLast}></View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Screen1_a')}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
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
  containerHeader: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerContent: {
    fontWeight: 700,
    fontSize: 60,
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
  containerVerification: {
    flex: 1.75,
    height: 45,
    width: 305,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verificationRec: {
    height: 45,
    width: 45,
    borderColor: 'black',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
  },
  verificationRecLast: {
    height: 45,
    width: 45,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default Screen1_c;
