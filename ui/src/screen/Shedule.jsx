import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useState } from "react";
import CalenderModel from "../components/CalenderModel";
import { ModelContext } from "../context/ModelProvider";
import Text from "../components/Text"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Shedule = ({navigation}) => {
  const [selectTime, setSelectTime] = useState(null);

  const {
    modelVisible,
    setModelVisible,
    selectedDate,
    setSelectedDate,
    dates,
  } = useContext(ModelContext);

  const TimeSlots = [
    "11:00-12:00",
    "12:00-01:00",
    "01:00-02:00",
    "02:00-03:00",
    "03:00-04:00",
    "04:00-05:00",
    "05:00-06:00",
    "06:00-07:00",
  ];


  return (
    <>
      {modelVisible && <CalenderModel />}

      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        {/* custom header */}
        <View style={[styles.headingContainer,]}>
          <TouchableOpacity onPress={()=>navigation.navigate('invoice')}>
            <Ionicons name="chevron-back" size={34} color="#dc8c4cff" />
          </TouchableOpacity>
          <Text style={[styles.headingText,{fontFamily:"ProximaNova-Regular"}]}>Select Date and Time</Text>
        </View>
        {/* image banner section */}
        <View>
          <Image
            source={require("../../assets/banner.webp")}
            style={styles.img}
          />
        </View>

        {/* main section */}
        <View style={styles.dateContainer}>
          <View style={styles.monthTitle}>
            <Text style={styles.month}>{dates[0].month}</Text>
            <TouchableOpacity onPress={() => setModelVisible(true)}>
              <FontAwesome5 name="calendar-alt" size={24} color="#dc8c4cff" />
            </TouchableOpacity>
          </View>
          <View style={styles.dates}>
            {dates.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.currentDate,
                  selectedDate?.toDateString() ===
                    item.fullDate.toDateString() && {
                    borderColor: "#dc8c4cff",
                    borderWidth: 1,
                    shadowColor: "#dc8c4cff",
                    elevation: 10,
                  },
                ]}
                onPress={() => setSelectedDate(item.fullDate)}
              >
                <Text
                  style={{
                    fontSize: wp("4%"),
                     fontFamily:"ProximaNova-Bold",
                    color:
                      selectedDate?.toDateString() ===
                      item.fullDate.toDateString()
                        ? "#dc8c4cff"
                        : "#ccc",
                  }}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.slotContainer}>
            <Text style={styles.slotTitle}>Available Time Slots</Text>

            <View style={styles.timeContainer}>
              {TimeSlots.map((time, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.timebtn,
                    { borderColor: selectTime === time ? "#dc8c4cff" : "#ccc" },
                  ]}
                  onPress={() => setSelectTime(time)}
                >
                  <Text
                    style={[
                      styles.timeText,
                      {
                        borderColor: selectTime === time ? "#dc8c4cff" : "#ccc",
                        fontFamily: selectTime === time ? "ProximaNova-Bold" : "ProximaNova-regular",
                        color: selectTime === time ? "#dc8c4cff" : "#ccc",
                      },
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        {/* footer section */}
        <View style={styles.footerContainer}>
          <Text style={{  fontFamily:"ProximaNova-Bold", fontSize: 16 }}>
            Note:
            <Text style={styles.note}>
              Your IK Calendar will be synced to your Google Calendar
            </Text>
          </Text>
          <TouchableOpacity
            style={[styles.proceedbtn, !selectTime && styles.disablebtn]}
            disabled={!selectTime}
          >
            <Text style={styles.textbtn}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Shedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: wp("2.5%"),
    marginBottom: hp("1%"),
    paddingBottom:hp('1.5%'),
  },
  headingText: {
    color: "gray",
    fontSize: wp("5%"),
    marginLeft: wp("2.5%"),
  },
  img: {
    width: wp("100%"),
    height: hp("25%"),
    resizeMode: "contain",
  },
  dateContainer: {
    flex: 0.9,
    // borderColor:'black',
    // borderWidth:1,
    paddingTop: 6,
  },
  monthTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp("6%"),
  },
  month: {
    fontFamily:"ProximaNova-Bold",
    fontSize: wp("5%"),
  },
  dates: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: wp("6%"),
    marginTop: hp("1.5%"),
  },
  currentDate: {
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("1%"),
    borderRadius: 25,
    backgroundColor: "white",
  },
  date: {
    fontWeight: "bold",
    fontSize: wp("4%"),
  },
  slotContainer: {
    margin: wp("6%"),
  },
  slotTitle: {
     fontFamily:"ProximaNova-Bold",
    fontSize: wp("4.5%"),
    marginBottom: hp("1%"),
  },
  timeContainer: {
    flexDirection: "row",
   // margin: wp('0.5%'),
    flexWrap: "wrap",
    // justifyContent:'space-between',

  },
  timebtn: {
    width: wp("27%"),
    borderColor: "#cc",
    marginRight: wp("2.2%"),
    marginVertical:hp("1%"),
    paddingVertical: hp("1.5%"),
    paddingHorizontal:wp('1%'),
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
  },
  timeText: {
    color: "#ccc",
    fontFamily:'proximanova_bold',
    fontSize: wp("3.6%"),
  },
  footerContainer: {
    marginHorizontal: wp("6%"),
    marginVertical: wp("4%"),
  },
  note: {
    fontWeight: "300",
  },
  proceedbtn: {
    borderColor: "#dc8c4cff",
    backgroundColor: "#dc8c4cff",
    borderWidth: 1,
    paddingHorizontal: wp("1%"),
    paddingVertical: wp("3%"),
    borderRadius: 25,
    marginTop: wp("5%"),
  },
  disablebtn: {
    borderColor: "#dfb899ff",
    backgroundColor: "#dfb899ff",
  },
  textbtn: {
    textAlign: "center",
    fontFamily:'proximanova_bold',
    fontSize: wp("5%"),
  },
});
