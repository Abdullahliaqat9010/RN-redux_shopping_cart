import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ShoppingCart from "../../screens/ShoppingCart";

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Shopping Cart",
          headerTitleStyle: { color: "#f55601" },
        }}
        name="ShoppingCart"
        component={ShoppingCart}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
