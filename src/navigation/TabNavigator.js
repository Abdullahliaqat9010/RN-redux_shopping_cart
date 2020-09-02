import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import WishListStack from "./StackNavigators/WishListStack";
import HomeStack from "./StackNavigators/HomeStack";
import ShoppingCartStack from "./StackNavigators/ShoppingCartStack";

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="white"
      inactiveColor="#ef7d0f"
      barStyle={{ backgroundColor: "#f55601" }}
      shifting
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="home" color={color} size={25} />;
          },
          tabBarLabel: "Home",
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="heart" color={color} size={25} />;
          },
          tabBarLabel: "WishList",
        }}
        name="WishList"
        component={WishListStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="cart" color={color} size={25} />;
          },
          tabBarBadge: 2,
          tabBarLabel: "Cart",
        }}
        name="ShoppingCart"
        component={ShoppingCartStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
