import { Card } from "@rneui/themed";
import { Image, ImageSourcePropType } from "react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ITouchableCardProps {
  title: string;
  icon?: ImageSourcePropType;
  width?: number;
  bold?: boolean;
  onPress: (house: string) => void;
}

export const TouchableCard = ({
  bold,
  width,
  icon,
  title,
  onPress,
}: ITouchableCardProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(title)}>
      <Card
        wrapperStyle={styles.wrapper}
        containerStyle={[styles.cardContainer, width ? { width: width } : {}]}
      >
        {icon && <Image source={icon} style={styles.imageContainer} />}
        <Text
          style={[
            styles.titleText,
            bold ? { fontWeight: "600", fontSize: 16 } : {},
          ]}
        >
          {title}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 2,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#E0E0E0",
    padding: 20,
  },
  wrapper: {
    alignItems: "center",
  },
  triesText: {
    fontSize: 18,
  },
  titleText: {
    fontSize: 14,
    fontWeight: "300",
  },
  imageContainer: { width: 20, height: 20 },
});
