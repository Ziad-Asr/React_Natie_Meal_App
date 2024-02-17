import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, Key: Math.random().toString() }, // Added 1)this Key 2)push an array => For ((<FlatList></FlatList>))
    ]);
  }

  function daleteGoalHandler() {
    console.log("DELETE");
  }

  return (
    <View style={styles.appComponent}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={daleteGoalHandler}
              />
            );
          }}
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

  goalContainer: {
    flex: 5, // Should now make the parent of it have a fixed height (or dynamic but it does not change accoring to children)
    paddingTop: 40,
  },
});

// <View></View> => Uses {{{flex box}}} as a default
// <Button /> => Has not {style} prop (You can know that by the {{key}} that appears beside the auto complete of the prop)
// <Button /> => If we want to give it (alignItems) for example, we can add it to it's parent
// ** When I gave (<text></text>) a (borderRadius) it doesn't work on ios, only in android. To fix this put the styles on a (<view></view>) parent component
// We should not give (flex: 5) to (<ScrollView></ScrollView>), we should give it to it's parent component (<view></view>) to work properly
// ** the problem with (<ScrollView></ScrollView>) is that if the rendered array inside it is to long => it (renders them all event if the user didn't scroll to them but they are renderd in the bachground), and that will make a greate problem with large amount of list data
// The solution to (<ScrollView></ScrollView>) problem => Using (<FlatList></FlatList>)
