import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CatigoryGridTitle from "../components/CatigoryGridTitle";

function CatigoriesScreen({ navigation }) {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview");
    };

    return (
      <CatigoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CatigoriesScreen;
