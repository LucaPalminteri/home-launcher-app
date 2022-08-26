import { View } from "react-native"
import colors from "../styles/colors"
import styles from "../styles/styles"

const AppList = ()=> {
    return (
        <View style={{display: 'flex',flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color:colors.dark}}>This is where the menu should be</Text>
        </View>
    )
}

export default AppList