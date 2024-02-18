import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CatigoriesScreen from "./screens/CatigoriesScreen";

export default function App() {
  return (
    <View style={styles.rootStyle}>
      <StatusBar style="light" />
      <CatigoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootStyle: {
    backgroundColor: "#24180f",
  },
});
