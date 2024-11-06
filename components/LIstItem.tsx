import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import { studentType } from "../utils/studentType";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamsList, RootStackParamList } from "../utils/navigateType";

interface IListItemProps extends studentType {
  attempts: number;
  guessed?: boolean;
}

export const ListItem = ({
  id,
  attempts,
  image,
  name,
  guessed = false,
}: IListItemProps) => {
  const navigation =
    useNavigation<NavigationProp<MainStackParamsList & RootStackParamList>>();

  const clickHandler = () => {
    return navigation.navigate("Info", { id, title: name, guessed });
  };
  const clickRefreshHandler = (event: GestureResponderEvent) => {
    event.stopPropagation();
    return navigation.navigate("Home");
  };

  return (
    <TouchableOpacity onPress={clickHandler}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View>
            <Image source={{ uri: image }} style={styles.avatarImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.attemptsText}>Attempts:{attempts}</Text>
          </View>
        </View>
        <View>
          {guessed ? (
            <Image
              source={require("../assets/houses/checkmark.jpeg")}
              style={styles.imageStyle}
            />
          ) : (
            <View style={styles.imagesContainer}>
              <TouchableOpacity onPress={clickRefreshHandler}>
                <Image
                  source={require("../assets/houses/refresh.png")}
                  style={styles.imageStyle}
                />
              </TouchableOpacity>
              <Image
                source={require("../assets/houses/redcross.jpeg")}
                style={styles.imageStyle}
              />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rightContent: {},
  textContainer: {
    gap: 10,
  },
  nameText: {
    fontWeight: "700",
  },
  attemptsText: {
    fontWeight: "400",
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  imagesContainer: {
    flexDirection: "row",
    gap: 10,
  },
  avatarImage: {
    width: 60,
    height: 80,
  },
});
