import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { useContext } from "react";
import { Calendar } from "react-native-calendars";
import { BlurView } from "expo-blur";
import { ModelContext } from "../context/ModelProvider";
import { getNextFiveDays } from "../utils/utils";
import AntDesign from "@expo/vector-icons/AntDesign";

const CalenderModel = () => {
  const {
    modelVisible,
    setModelVisible,
    selectedDate,
    setSelectedDate,
    setDates,
  } = useContext(ModelContext);

  return (
    <Modal
      transparent
      visible={modelVisible}
      animationType="fade"
      onRequestClose={() => setModelVisible(false)}
    >
      {/* Background Blur */}
      <BlurView
        intensity={120}
        tint="light"
        style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      />

      <View style={styles.container}>
        <View style={styles.calender}>
          <Calendar
            renderArrow={(direction) => (
              <AntDesign
                name={direction === "left" ? "left" : "right"}
                size={18}
                color="#ccc"
              />
            )}
            minDate={new Date().toISOString().split("T")[0]}
            onDayPress={(day) => {
              const chosenDate = new Date(day.dateString);
              setDates(getNextFiveDays(chosenDate));
              setSelectedDate(chosenDate);
            }}
            markedDates={{
              [selectedDate?.toISOString().split("T")[0]]: {
                selected: true,
                selectedColor: "#dc8c4c",
                selectedTextColor: "#fff",
              },
            }}
            theme={{
              todayTextColor: "#dc8c4c",
              arrowColor: "#ccc",
              // textDayFontWeight: "500",
             // textMonthFontWeight: "bold",
              textMonthFontFamily:'ProximaNova-Bold',
              textDayFontFamily:'ProximaNova-Regular'
            }}
          />

          {/* Buttons at bottom-right */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => setModelVisible(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button]}
              onPress={() => setModelVisible(false)}
            >
              <Text style={styles.setText}>Set</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 24,
  },
  calender: {
    borderRadius: 25,
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#545151ff",
    elevation: 24,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20,
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginLeft: 10,
  },
  cancelText: {
    color: "#dc8c4c",
    fontFamily:'ProximaNova-Bold'
  },
  setText: {
    color: "#dc8c4c",
     fontFamily:'ProximaNova-Bold'
  },
});

export default CalenderModel;
