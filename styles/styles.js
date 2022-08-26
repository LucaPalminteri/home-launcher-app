import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  // App
  app: {
    position: "relative",
    flex: 1,
    backgroundColor: colors.main,
    alignItems: "center",
    justifyContent: "space-around",
  },
  //Home
  containerClock: {
    alignSelf: "center",
    top: 80,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderColor: colors.dark,
    borderWidth: 4,
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  hour: {
    textAlign: "center",
    textAlignVertical: "center",
    color: colors.dark,
    fontSize: 40,
  },
  date: {
    textAlign: "center",
    textAlignVertical: "center",
    color: colors.dark,
    fontSize: 15,
    marginTop: -50,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    padding: 30,
  },
  // AppList
  appList: {
    position: 'relative',
    display: "flex",
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    paddingBottom:30,
  },
  flatList: {
    width: '100%',
    paddingLeft: 40
  },
  itemFlatList: {
    padding: 8,
    fontSize: 25,
    color: colors.dark,
    width: '100%',
  },
  textInput: {
    color:colors.dark, 
    fontSize: 30,
    borderBottomWidth: 3,
    borderColor: colors.darkDark , 
    width: '100%',
    textAlign: 'left',
    paddingBottom: 10,
    paddingLeft: 50
  },
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    width: 60,
    textAlign: 'center'
  },
  listView: {
    marginTop: 50,
    width: '100%',
    marginBottom: 30
  }
});

export default styles;
