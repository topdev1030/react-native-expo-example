import React from "react";
import { Text, View } from "react-native";

export default function HelloWorld1() {
  return (
    // https://reactnative.dev/docs/view
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3498db",
      }}
    >
      {/* https://reactnative.dev/docs/text */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        Hello world!
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        Expo Group
      </Text>
    </View>
  );
}
