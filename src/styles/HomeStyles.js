import { StyleSheet } from "react-native";
import { useThemeContext } from "../contexts/ThemeContext";

const createStyles = () => {
  const { theme } = useThemeContext();
  const { colors } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
    text: {
      fontSize: 18,
      color: colors.text,
    },
    button: {
      marginTop: 20,
      backgroundColor: colors.primary,
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: colors.background,
    },
  });
};

export default createStyles;
