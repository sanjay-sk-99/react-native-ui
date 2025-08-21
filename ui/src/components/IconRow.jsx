import { View,StyleSheet } from "react-native";
import Text from "../components/Text"
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default function IconRow({ icon, text }) {
  return (
    <View style={styles.lineDetail}>
      {icon}
      <Text style={styles.textline}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
      lineDetail: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginTop: verticalScale(4),
      },
      textline: {
        color: "#928e8eff",
        fontSize: moderateScale(14),
      },
})