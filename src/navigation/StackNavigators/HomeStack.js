import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../screens/Home";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: "Home", headerTitleStyle: { color: "#f55601" } }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
