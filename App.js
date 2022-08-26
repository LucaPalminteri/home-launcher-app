// Core components
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';

// Custom Components
import styles from './styles/styles';
import Home from './components/Home';
import AppList from './components/AppList';

 const App = ()=> {
  return (
    <View style={styles.app}>
      <Swiper  
        showsButtons={false} 
        loop={false} 
        showsPagination={false}
      >
        <Home />
        <AppList />
      </Swiper>
      <StatusBar style="auto" />
    </View>
  );
}

export default App