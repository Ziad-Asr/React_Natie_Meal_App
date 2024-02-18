import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CatigoriesScreen from "./screens/CatigoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <View style={styles.rootStyle}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#651401" },
            headerTintColor: "white",
            cardStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CatigoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    backgroundColor: "#24180f",
  },
});

// Overflow: 'hidden' ===> Hide the shaowing on ios
