import React from "react";
import { View, Text, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <FlatList
        numColumns={2}
        contentContainerStyle={{ paddingVertical: 5 }}
        showsVerticalScrollIndicator={false}
        data={[
          { id: "1" },
          { id: "2" },
          { id: "3" },
          { id: "4" },
          { id: "5" },
          { id: "6" },
          { id: "7" },
          { id: "8" },
          { id: "9" },
        ]}
        keyExtractor={(x) => x.id}
        renderItem={() => {
          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 7,
              }}
            >
              <ProductCard
                imgUrl="https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_960_720.jpg"
                name="Strawberry"
                price={200}
                unit="kg"
                isWishListed={true}
                onAddedToWishList={null}
                onAddedToCart={null}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;
