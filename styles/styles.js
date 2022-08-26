import { StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    // App
    app: {
      position: 'relative',
      flex: 1,
      backgroundColor: colors.main,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    //Home
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
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      icon: {
        padding: 30
      },
      // AppList
      appList: {
        display: 'flex',
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      }
  });

  export default styles