import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WishList from "../../screens/WishList";

const Stack = createStackNavigator();

const WishListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: "WishList", headerTitleStyle: { color: "#f55601" } }}
        name="WishList"
        component={WishList}
      />
    </Stack.Navigator>
  );
};

export default WishListStack;
