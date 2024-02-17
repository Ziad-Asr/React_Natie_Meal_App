import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setInteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    // This function gets the enterd text directly {{With every key strock}}
    setInteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, Key: Math.random().toString() }, // Added 1)this Key 2)push an array => For ((<FlatList></FlatList>))
    ]);
  }

  return (
    <View style={styles.appComponent}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appComponent: {
    flex: 1, // Makes the wrapper container (parentcontainer) takes all the available height of the page
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1, // Should now make the parent of it have a fixed height (or dynamic but it does not change accoring to children)
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 5, // Should now make the parent of it have a fixed height (or dynamic but it does not change accoring to children)
    paddingTop: 40,
  },
  goalItem: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

// <View></View> => Uses {{{flex box}}} as a default
// <Button /> => Has not {style} prop (You can know that by the {{key}} that appears beside the auto complete of the prop)
// <Button /> => If we want to give it (alignItems) for example, we can add it to it's parent
// ** When I gave (<text></text>) a (borderRadius) it doesn't work on ios, only in android. To fix this put the styles on a (<view></view>) parent component
// We should not give (flex: 5) to (<ScrollView></ScrollView>), we should give it to it's parent component (<view></view>) to work properly
// ** the problem with (<ScrollView></ScrollView>) is that if the rendered array inside it is to long => it (renders them all event if the user didn't scroll to them but they are renderd in the bachground), and that will make a greate problem with large amount of list data
// The solution to (<ScrollView></ScrollView>) problem => Using (<FlatList></FlatList>)
