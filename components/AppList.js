import { View, Text, FlatList, TextInput } from "react-native"
import { useState, useEffect } from "react";
import colors from "../styles/colors"
import styles from "../styles/styles"
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppInstalledChecker, CheckPackageInstallation } from 'react-native-check-app-install';
const search = <Icon name="search" size={30} color={colors.darkDark} />;
const settings = <Icon name="gear" size={30} color={colors.darkDark} />;

const AppList = ()=> {

    const [apps,setApps] = useState([])

    useEffect(()=> {
        let ex = []
        let list = AppInstalledChecker.getAppList().sort();
        list.forEach(elem => {
          let app = elem[0].toUpperCase()+elem.slice(1)
            ex.push({key: app})
        })
        setApps(ex)
    },[]);

    const onChangeAppList = (text)=> {
      let ex = []
      let list = AppInstalledChecker.getAppList().sort();
      list.forEach(elem => {
        let app = elem[0].toUpperCase()+elem.slice(1)
        if(elem.toLocaleUpperCase().includes(text.toLocaleUpperCase())) ex.push({key: app})
      })
      setApps(ex)
    }

    const letters = () => {
      let ex = []
      for(let i=65;i<91;i++) {
        ex.push(<Text key={i}>{String.fromCharCode(i)}</Text>)
      }
      return ex
    }


    return (
        <View style={styles.appList}>
          <View style={styles.listView}> 
            <TextInput
              style={styles.textInput}
              placeholder="search apps..."
              onChangeText={onChangeAppList}
            />
            <FlatList
            showsVerticalScrollIndicator={false}
              style={styles.flatList}
              data={apps}
              renderItem={({item}) => <Text style={styles.itemFlatList}>{item.key}</Text>}
            />
          </View>
          <View style={styles.sideBar}>
            {search}
            <View>
              {letters()}
            </View>
            {settings}
          </View>
        </View>
    )
}

export default AppList