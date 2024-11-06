import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { SelectorType } from "../redux/reducers";
import { TryCard } from "./Cards/TryCard";
import { Input } from "@rneui/themed";
import Feather from "@expo/vector-icons/Feather";
import { ListItem } from "./LIstItem";
import { LoadingWrapper } from "../wrappers/LoadingWrapper";
import { useDebounce } from "../hooks/useDebounce";
import { useState } from "react";

export const List = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const { debouncedValue, isDebouncing } = useDebounce({ value: searchValue });

  const { guessedCharacters } = useSelector(
    (state: SelectorType) => state.charachersReducer
  );

  const { failed, success, total } = useSelector(
    (state: SelectorType) => state.triesReducer
  );

  const changeTextHandler = (event: string) => {
    return setSearchValue(event);
  };

  return (
    <SafeAreaView>
      <View style={styles.cardsContainer}>
        <TryCard tries={total} title="Total" />
        <TryCard tries={success} title="Success" />
        <TryCard tries={failed} title="Failed" />
      </View>
      <View>
        <Input
          placeholder="Filter characters..."
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputField}
          rightIcon={<Feather name="search" size={24} color="black" />}
          onChangeText={changeTextHandler}
        />
      </View>
      <LoadingWrapper isError={false} isLoading={isDebouncing}>
        <View style={styles.charactersContainer}>
          {debouncedValue &&
          guessedCharacters.filter((item) =>
            item.name.toLowerCase().includes(debouncedValue?.toLowerCase()!)
          ).length === 0 ? (
            <Text style={styles.notFoundText}>Not found</Text>
          ) : (
            <FlatList
              data={
                !debouncedValue
                  ? guessedCharacters
                  : guessedCharacters.filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(debouncedValue?.toLowerCase()!)
                    )
              }
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => <ListItem {...item} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.containerStyle}
            />
          )}
        </View>
      </LoadingWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  charactersContainer: {
    marginTop: 20,
    width: "75%",
    margin: "auto",
    height: "100%",
    paddingBottom: 200,
  },
  inputContainer: {
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 5,
    height: 55,

    width: "80%",
    margin: "auto",
    marginTop: 20,
  },
  inputField: {
    borderBottomWidth: 0,
  },
  containerStyle: {
    flexDirection: "column",
    gap: 10,
    flexGrow: 1,
    paddingBottom: 170,
  },
  notFoundText: { textAlign: "center", fontSize: 24, fontWeight: "600" },
});
