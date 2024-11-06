import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../components/Home";
import { List } from "../components/List";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { ResetButton } from "../components/Buttons/ResetButton";
import { CharacterInfo } from "../components/CharacterInfo";
import { MainStackParamsList, RootStackParamList } from "../utils/navigateType";
import { BackButton } from "../components/Buttons/BackButton";

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<MainStackParamsList>();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={CharacterInfo}
          options={({ route }) => ({
            headerTitle: route.params.title || "Info Page",
            headerTitleAlign: "center",
            headerLeft: () => <BackButton text="Back" back />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          headerRight: () => <ResetButton />,
          headerRightContainerStyle: { paddingRight: 12 },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: "List",
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" size={size} color={color} />
          ),
          headerRight: () => <ResetButton />,
          headerTitleAlign: "center",
          headerRightContainerStyle: { paddingRight: 12 },
        }}
      />
    </Tab.Navigator>
  );
};
