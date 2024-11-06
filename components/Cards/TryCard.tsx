import { Card } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ITryCardProps {
  tries: number;
  title: string;
}

export const TryCard = ({ title, tries }: ITryCardProps) => {
  return (
    <Card wrapperStyle={styles.wrapper} containerStyle={styles.cardContainer}>
      <Text style={styles.triesText}>{tries}</Text>
      <Text style={styles.titleText}>{title}</Text>
    </Card>
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
});
