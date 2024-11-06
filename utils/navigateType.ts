export type RootStackParamList = {
  Home: undefined;
  List: undefined;
};

export type MainStackParamsList = {
  Main: undefined;
  Info: {
    id: string;
    title: string;
    guessed: boolean;
  };
};
