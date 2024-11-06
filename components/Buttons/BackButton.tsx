import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface IBackButton {
  text: string;
  back?: boolean;
}

export const BackButton = ({ text, back = false }: IBackButton) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}
    >
      {back && <Ionicons name="chevron-back" size={20} color="black" />}
      <Text style={styles.textContainer}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: { color: "black", fontSize: 16, fontWeight: "400" },
});
