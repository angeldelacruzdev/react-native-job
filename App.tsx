import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
        }}
      >
        Hola mundo.
      </Text>
    </View>
  );
}
