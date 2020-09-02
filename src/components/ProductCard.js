import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { height, width } = Dimensions.get("window");
const ProductCard = ({
  imgUrl,
  name,
  price,
  unit,
  isWishListed,
  onAddedToWishList,
  onAddedToCart,
}) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        imageStyle={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
        source={{
          uri: imgUrl,
        }}
        style={{ flex: 5 }}
      >
        <View style={styles.imageContainer}>
          <Icon
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: 5,
              padding: 4,
            }}
            name="heart"
            size={25}
            color={isWishListed ? "red" : "white"}
          />
        </View>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.infoText}>{name}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={styles.infoText}>
            {`Rs ${price}`}
            <Text
              style={[styles.infoText, { fontSize: 10 }]}
            >{`  (Per ${unit})`}</Text>
          </Text>
          <Icon name="cart" size={22} color="#f55601" />
        </View>
      </View>
    </View>
  );
};
export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3,
    minHeight: height * 0.32,
    width: width * 0.45,
  },
  imageContainer: {
    flex: 1,
    padding: 5,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  infoContainer: {
    flex: 2,
    padding: 7,
  },
  infoText: {
    color: "#7b7373",
    fontSize: 15,
  },
});
