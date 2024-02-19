import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";

import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen() {
  const FavMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    FavMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You don't have favoritemeals yet!</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
