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
        let ex = []
        AppInstalledChecker.getAppList().forEach(elem => {
            ex.push({key: elem})
        })
        setApps(ex)
    },[]);

    console.log(typeof apps);

    return (
        <View style={styles.appList}>
          <Text style={{color:colors.dark, fontSize: 40,borderBottomWidth: 3,borderColor: colors.darkDark , width: '100%',textAlign: 'center'}}>This is where the menu should be</Text>
          <FlatList
            style={styles.flatList}
            data={apps}
            renderItem={({item}) => <Text style={styles.itemFlatList}>{item.key}</Text>}
          />
        </View>
    )
}

export default AppList