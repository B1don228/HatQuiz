import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useGetAllStudentsQuery } from "../redux/api/studentsApi";
import { LoadingWrapper } from "../wrappers/LoadingWrapper";
import { TryCard } from "./Cards/TryCard";
import { TouchableCard } from "./Cards/TouchableCard";
import { useDispatch, useSelector } from "react-redux";
import { SelectorType } from "../redux/reducers";
import { actions as charactersActions } from "../redux/slices/openedSlice";
import { actions as triesActions } from "../redux/slices/triesSlice";
import { actions as indexActions } from "../redux/slices/indexSlice";

export const Home = () => {
  const { failed, success, total } = useSelector(
    (state: SelectorType) => state.triesReducer
  );
  const { index } = useSelector((state: SelectorType) => state.indexReducer);

  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetAllStudentsQuery();

  const nextCharacter = (house: string) => {
    if (data![index].house === (house === "Not in House" ? "" : house)) {
      dispatch(triesActions.successAnswer());
      dispatch(charactersActions.successAttempt(data![index]));
      return dispatch(indexActions.changeIndex());
    } else {
      dispatch(triesActions.failedAnswer());
      dispatch(charactersActions.failAttempt(data![index]));
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <LoadingWrapper isError={isError} isLoading={isLoading}>
        <View style={styles.cardsContainer}>
          <TryCard tries={total} title="Total" />
          <TryCard tries={success} title="Success" />
          <TryCard tries={failed} title="Failed" />
        </View>
        <View style={styles.imageContainer}>
          {data && data![index].image ? (
            <Image
              source={{ uri: data && data[index].image }}
              style={styles.largeImageContainer}
            />
          ) : (
            <Text>No image</Text>
          )}
          <Text style={styles.imageContainerText}>
            {data && data[index].name}
          </Text>
        </View>
        <View style={styles.bottomCardsContainer}>
          <View style={styles.bottomCardsContainerRow}>
            <TouchableCard
              onPress={nextCharacter}
              icon={require("../assets/houses/gryffindor.jpeg")}
              title="Gryffindor"
              width={150}
            />
            <TouchableCard
              onPress={nextCharacter}
              width={150}
              icon={require("../assets/houses/slytherin.jpg")}
              title="Slytherin"
            />
          </View>
          <View style={styles.bottomCardsContainerRow}>
            <TouchableCard
              onPress={nextCharacter}
              width={150}
              icon={require("../assets/houses/ravenclow.jpeg")}
              title="Ravenclaw"
            />
            <TouchableCard
              onPress={nextCharacter}
              width={150}
              icon={require("../assets/houses/hufflepuff.jpeg")}
              title="Hufflepuff"
            />
          </View>
          <TouchableCard
            onPress={nextCharacter}
            bold
            width={330}
            title="Not in House"
          />
        </View>
      </LoadingWrapper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  imageContainerText: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "700",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomCardsContainerRow: {
    display: "flex",
    flexDirection: "row",
  },
  bottomCardsContainer: {
    display: "flex",
    alignItems: "center",
  },
  largeImageContainer: { width: 200, height: 300 },
});
