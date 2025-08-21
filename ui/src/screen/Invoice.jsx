import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Text from "../components/Text";
import IconRow from "../components/IconRow";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const Invoice = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
        {/* custom header */}
        <View style={[styles.headingContainer]}>
          <View style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Ionicons name="chevron-back" size={34} color="#dc8c4cff" />
            </TouchableOpacity>
            <Text style={[styles.headingText]}>Invoice</Text>
          </View>
          <TouchableOpacity style={styles.downloadbtn}>
            <Text style={styles.downloadText}>Download</Text>
            <AntDesign name="download" size={24} color="#dc8c4cff" />
          </TouchableOpacity>
        </View>

        <View style={styles.descriptionContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={require("../../assets/face.png")}
              style={{
                height: "80%",
                width: "100%",
                resizeMode: "cover",
                borderRadius: 20,
              }}
            />
          </View>

          <View style={styles.details}>
            <Text style={{ fontFamily: "ProximaNova-Bold" }}>
              Emotional first aid
            </Text>
            {/* icon components */}
            <IconRow
              icon={
                <MaterialCommunityIcons
                  name="calendar-outline"
                  size={24}
                  color="#928e8eff"
                />
              }
              text={"August 24, 2023"}
            />
            <IconRow
              icon={
                <MaterialIcons
                  name="access-alarm"
                  size={24}
                  color="#928e8eff"
                />
              }
              text={"12.00PM - 03.00PM"}
            />
            <IconRow
              icon={
                <MaterialIcons name="g-translate" size={24} color="#928e8eff" />
              }
              text={"English"}
            />
            <IconRow
              icon={
                <MaterialCommunityIcons
                  name="calendar-outline"
                  size={24}
                  color="#928e8eff"
                />
              }
              text={" webinar added to your calendar"}
            />
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={[styles.detailHeader, { fontSize: moderateScale(16) }]}>
            Your Details
          </Text>
          <View style={styles.firstCard}>
            <Text
              style={[styles.detailHeader, { fontSize: moderateScale(14) }]}
            >
              Your Details
            </Text>
            <View style={styles.card}>
              <Image
                source={require("../../assets/facedummy.png")}
                style={{
                  height: "70%",
                  width: "20%",
                  resizeMode: "contain",
                  borderRadius: 50,
                  margin: moderateScale(10),
                }}
              />
              <View>
                <Text
                  style={[styles.detailHeader, { fontSize: moderateScale(15) }]}
                >
                  Nazriya Syed
                </Text>
                <Text
                  style={{
                    color: "#928e8eff",
                    fontSize: moderateScale(14),
                    marginVertical: verticalScale(5),
                  }}
                >
                  NazriyaSyed@gmail.com
                </Text>
                <Text
                  style={{ color: "#928e8eff", fontSize: moderateScale(14) }}
                >
                  98050000007
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.firstCard}>
            <Text
              style={[styles.detailHeader, { fontSize: moderateScale(14) }]}
            >
              Payment Details
            </Text>

            <View style={styles.paymentInfo}>
              <Text style={styles.paymentdesc}>
                Paid amount
              </Text>
              <Text style={styles.paymentdesc}>
                <FontAwesome name="rupee" size={12} color="#9c9999ff" /> 500
              </Text>
            </View>
            <View style={styles.paymentInfo}>
              <Text style={styles.paymentvalue}>
                Total
              </Text>
              <Text style={styles.paymentvalue}>
                <FontAwesome name="rupee" size={12} color="black" /> 500
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  headingContainer: {
    flex: 0.1,
    // borderColor: "black",
    // borderWidth: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(12),
  },
  headingText: {
    fontFamily: "ProximaNova-Bold",
    color: "gray",
    fontSize: moderateScale(18),
  },
  downloadbtn: {
    paddingHorizontal: wp("4%"),
    paddingVertical: hp("1%"),
    borderRadius: 25,
    borderColor: "#dc8c4cff",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  downloadText: {
    color: "#dc8c4cff",
    fontSize: moderateScale(14),
  },
  descriptionContainer: {
    flex: 0.2,
    // borderColor: "black",
    // borderWidth: 1,
    flexDirection: "row",
    padding: moderateScale(12),
  },
  imgContainer: {
    flex: 0.3,
    // borderColor: "black",
    // borderWidth: 1,
  },
  details: {
    flex: 0.7,
    // borderColor: "black",
    // borderWidth: 1,
    paddingHorizontal: scale(10),
  },
  detailsContainer: {
    flex: 0.7,
    // borderColor: "black",
    // borderWidth: 1,
    padding: moderateScale(12),
  },
  firstCard: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: "#5b5959ff",
    elevation: 8,
    marginTop: verticalScale(10),
    padding: moderateScale(12),
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailHeader: {
    fontFamily: "ProximaNova-Bold",
    color: "#6f6d6dff",
  },
  paymentInfo: {
    paddingVertical: moderateScale(12),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paymentdesc: {
    color: "#9c9999ff",
    fontSize: moderateScale(14),
  },
  paymentvalue: {
    fontFamily: "ProximaNova-Bold",
    fontSize: moderateScale(14),  
  },
});
