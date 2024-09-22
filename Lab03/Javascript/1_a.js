import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen1_a = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}  // Màu gradient từ xanh nhạt đến xanh đậm
      locations={[0, 0.2, 0.6, 0.95, 1,]}
      style={styles.container}
    >
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Screen1_b')}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerHow}>
        <Text style={styles.how}>HOW WE WORK?</Text>
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
  containerCircle: {
    flex: 7,
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
  containerHow: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  how: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen1_a;