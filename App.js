import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles/styles';
import colors from './styles/colors';
import Home from './components/Home';

export default function App() {
  return (
    <View style={styles.app}>
      <Swiper 
        style={styles.wrapper} 
        showsButtons={false} 
        loop={false} 
        showsPagination={false}
      >
        <Home />
        <View style={{display: 'flex',flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color:colors.dark}}>This is where the menu should be</Text>
        </View>
      </Swiper>
      <StatusBar style="auto" />
    </View>
  );
}