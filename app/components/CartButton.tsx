import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { images } from "@/constants";

const CartButton = () => {
  const totalItems = 15;

  return (
    <TouchableOpacity className="cart-btn" onPress={() => {}}>
      <Image
        source={images.bag}
        style={{ height: 20, width: 20 }}
        contentFit="contain"
      />

      {totalItems > 0 && (
        <View className="cart-badge">
          <Text className="small-bold text-white">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
