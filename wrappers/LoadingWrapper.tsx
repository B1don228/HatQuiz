import { ReactNode } from "react";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";

interface ILoadingWrapperProps {
  isLoading: boolean;
  isError: boolean;
  children: ReactNode;
}

export const LoadingWrapper = ({
  isError,
  isLoading = true,
  children,
}: ILoadingWrapperProps) => {
  return (
    <SafeAreaView>
      <View>{isLoading && <ActivityIndicator color={"black"} />}</View>
      <View>{isError && <Text>Some error occured</Text>}</View>
      <View>{!isError && !isLoading && children}</View>
    </SafeAreaView>
  );
};
