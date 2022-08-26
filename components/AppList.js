import { View, Text, FlatList } from "react-native"
import { useState, useEffect } from "react";
import colors from "../styles/colors"
import styles from "../styles/styles"
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppInstalledChecker, CheckPackageInstallation } from 'react-native-check-app-install';
const search = <Icon name="magnifying-glass" size={30} color="#FFF" />;
const settings = <Icon name="gear" size={30} color="#FFF" />;

const AppList = ()=> {

    const [apps,setApps] = useState([])

    useEffect(()=> {
        AppInstalledChecker.getAppList().forEach(elem => {
            setApps(prev => prev.push({key: {elem}}))
        })
    },[]);

    console.log(apps);

    return (
        <View style={styles.appList}>
          <Text style={{color:colors.dark}}>This is where the menu should be</Text>
          {/* <FlatList
            data={apps}
            renderItem={([item]) => <Text>{item}</Text>}
          /> */}
        </View>
    )
}

export default AppList