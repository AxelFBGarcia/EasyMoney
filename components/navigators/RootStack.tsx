import React, { FunctionComponent } from "react";

// screens
import Welcome from "@/screens/Welcome";
import Home from "@/screens/Home";

// custom components
import { colors } from "../colors";
import Greeting from "../Header/Greeting";
import Profile from "../Header/Profile";
import Avi from "../../assets/avi/avatar.png";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRightContainerStyle: { paddingRight: 25 },
          headerLeftContainerStyle: { paddingLeft: 25 },
          headerRight: () => <Profile img={Avi} imgContainerStyle={{}} />,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => <></>,
            headerLeft: (props) => (
              <Greeting mainText="Hello!" subText="Welcome back" {...props} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
