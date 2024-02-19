import { Text, View, StyleSheet } from "react-native";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyles,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyles]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyles]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyles]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
