import { color } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
//import { Camera } from 'expo-camera';

import Icon from 'react-native-vector-icons/FontAwesome';

const colors = {
  main: '#fbf8cc',
  secondary: '#f5ee84',
  dark: '#03045e'
}


const phone = <Icon name="phone" size={25} color={colors.dark} />;
const camera = <Icon name="camera" size={20} color={colors.dark} />;
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
      <Swiper 
        style={styles.wrapper} 
        showsButtons={false} 
        loop={false} 
        showsPagination={false}
      >
        <View>
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
        </View>
        <View style={{display: 'flex',flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color:colors.dark}}>This is where the menu should be</Text>
        </View>
      </Swiper>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}



const styles = StyleSheet.create({
  app: {
    position: 'relative',
    flex: 1,
    backgroundColor: colors.main,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerClock: {
    alignSelf: 'center',
    top: 80,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-evenly" ,
    borderColor: colors.dark,
    borderWidth: 4,
    width: 200,
    height: 200,
    borderRadius: 200
  },
  hour: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.dark,
    fontSize: 40,
  },
  date: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.dark,
    fontSize: 15,
    marginTop: -50
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#0f0'
  },
  icon: {
    padding: 30
  }
});
