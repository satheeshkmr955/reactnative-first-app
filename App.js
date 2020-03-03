import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [btnText, setBtnText] = useState("Hello React Native");
  return (
    <View style={styles.container}>
      <Text>{btnText}</Text>
      <Button
        title="Change Text"
        onPress={() => {
          setBtnText("Hello Satheesh Kumar");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
