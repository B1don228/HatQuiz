import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { actions as indexActions } from "../../redux/slices/indexSlice";
import { actions as triesActions } from "../../redux/slices/triesSlice";
import { actions as charactersActions } from "../../redux/slices/openedSlice";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/navigateType";

export const ResetButton = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const resetIndexHandler = () => {
    dispatch(triesActions.resetAnswers());
    dispatch(charactersActions.resetCharacters());
    dispatch(indexActions.resetIndex());
    return navigation.navigate("Home");
  };

  return (
    <TouchableOpacity onPress={resetIndexHandler}>
      <Text style={styles.text}>Reset</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "300",
  },
});
