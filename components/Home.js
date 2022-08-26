import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/styles';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const phone = <Icon name="phone" size={25} color={colors.dark} />;
const camera = <Icon name="camera" size={20} color={colors.dark} />;

const Home = ()=> {

    const [hour,setHour] = useState('')
    const [today,setToday] = useState('')
    
    useEffect(()=> {
      let actualTime = new Date()
      setToday(actualTime.toDateString());
      setHour(actualTime.toLocaleTimeString().slice(0,5))
    },[])

    return (
        <View style={{flexGrow: 1}}>
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
    )
}

export default Home