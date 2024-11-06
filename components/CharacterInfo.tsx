import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useGetStudentByIdQuery } from "../redux/api/studentsApi";
import { LoadingWrapper } from "../wrappers/LoadingWrapper";

interface ICharacterInfoProps {
  id: string;
  guessed: boolean;
}

type CharacterInfoRouteProps = RouteProp<{ Info: ICharacterInfoProps }, "Info">;

export const CharacterInfo = () => {
  const route = useRoute<CharacterInfoRouteProps>();
  const { id, guessed } = route.params;

  const { data, isLoading, isError } = useGetStudentByIdQuery(id, {
    skip: !id,
  });

  return (
    <LoadingWrapper isLoading={isLoading} isError={isError}>
      <View style={styles.container}>
        <Image
          source={{ uri: data?.[0].image }}
          style={styles.imageContainer}
        />
        {guessed ? (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>House: {data?.[0].house}</Text>
            <Text style={styles.infoText}>
              Date of Birth: {data?.[0].dateOfBirth}
            </Text>
            <Text style={styles.infoText}>Actor: {data?.[0].actor}</Text>
            <Text style={styles.infoText}>Species: {data?.[0].species}</Text>
          </View>
        ) : (
          <View style={styles.rightContent}>
            <Image
              source={require("../assets/houses/denied.png")}
              style={styles.largeImageStyle}
            />
            <Text style={styles.deniedText}>Access denied</Text>
          </View>
        )}
      </View>
    </LoadingWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: "center",
    flexDirection: "row",
    gap: 30,
  },
  imageContainer: { width: 130, height: 200 },
  infoContainer: {
    gap: 20,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "600",
  },
  largeImageStyle: { width: 140, height: 140 },
  rightContent: {
    alignItems: "center",
    gap: 20,
  },
  deniedText: {
    fontSize: 18,
    fontWeight: "700",
  },
});
