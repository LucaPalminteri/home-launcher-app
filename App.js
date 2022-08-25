import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

import Icon from 'react-native-vector-icons/FontAwesome';
const phone = <Icon name="phone" size={25} color="#FFF" />;
const camera = <Icon name="camera" size={20} color="#FFF" />;
const search = <Icon name="magnifying-glass" size={30} color="#FFF" />;
const settings = <Icon name="gear" size={30} color="#FFF" />;

export default function App() {

  const [hour,setHour] = useState('')
  const [today,setToday] = useState('')
  

  useEffect(()=> {
    let actualTime = new Date()
    setToday(actualTime.toDateString());
    setHour(actualTime.toLocaleTimeString().slice(0,5))
  },[])

  return (
    <View style={styles.app}>
      <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.containerClock}>
        <Text style={styles.hour}>{hour}</Text>
        <Text style={styles.date}>{today}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.icon}>
          {phone}
        </View>
        <View style={styles.icon}>
          {camera}
        </View>
      </View>
        <View>
          <Text style={{color:'#fff'}}>Hello Swiper</Text>
        </View>
      </Swiper>
      {/* <Text style={{color:'#FFF'}}>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerClock: {
    position: 'absolute',
    top: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-evenly" ,
    borderColor: '#FFF',
    borderWidth: 2,
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  hour: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: "#FFF",
    fontSize: 40,
  },
  date: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: "#FFF",
    fontSize: 15,
    marginTop: -50
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between'
  },
  icon: {
    padding: 30
  }
});
