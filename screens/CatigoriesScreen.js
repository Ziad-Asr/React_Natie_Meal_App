import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CatigoryGridTitle from "../components/CatigoryGridTitle";

const renderCategoryItem = (itemData) => {
  return (
    <CatigoryGridTitle
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
};

function CatigoriesScreen() {
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
