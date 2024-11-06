import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { ResetButton } from "./Buttons/ResetButton";

interface IHeaderProps extends BottomTabHeaderProps {
  title: string;
}

export const Header = ({ title }: IHeaderProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainScreen}>
        <Text>{title}</Text>
        <ResetButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  mainScreen: {},
});
