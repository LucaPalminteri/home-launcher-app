import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#FFF" />;

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
      <View style={styles.containerClock}>
        <Text style={styles.hour}>{hour}</Text>
      </View>
      <View>
          {myIcon}
      </View>
      {/* <Text style={{color:'#FFF'}}>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerClock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-evenly" ,
    borderColor: '#FFF',
    borderWidth: 2,
    width: 200,
    height: 200,
    borderRadius: 200
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
  }
});
