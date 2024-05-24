import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useThemeContext } from "../contexts/ThemeContext";
import createStyles from "../styles/HomeStyles";

export default function Home() {
  const { isDarkTheme, toggleTheme } = useThemeContext();
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>
          {isDarkTheme ? "Trocar para tema branco" : "Trocar para tema preto"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
