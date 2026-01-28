import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const car = require("@/assets/images/car.png");

const MONTH_OPTIONS = [12, 24, 36, 48, 60, 72, 84];
const DOWN_PAYMENT = [5, 10, 15, 20, 25, 30, 35];

export default function Input() {
  const [carPrice, setCarPrice] = useState("");
  const [carDownPayment, setCarDownPayment] = useState("");
  const [carMonth, setCarMonth] = useState("");
  const [carInterest, setCarInterest] = useState("");
  const [carInstallment, setCarInstallment] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {/*ส่วนของแสดงรูป*/}
        <Image source={car} style={styles.car} />
        {/*ส่วนของป้อนข้อมูล*/}
        <View style={styles.inputContainer}>
          <Text style={{ fontFamily: "Kanit_700Bold", fontSize: 30 }}>
            คำนวณค่างวดรถ
          </Text>

          {/*ส่วนของป้อนค่ารถ*/}
          <Text style={styles.inputTitle}>ราคารถ</Text>
          <TextInput
            placeholder="เช่น 15200 "
            placeholderTextColor="#999"
            keyboardType="numeric"
            style={styles.inputValue}
            value={carPrice}
            onChangeText={setCarPrice}
          />

          {/*ส่วนของเลือกเงินดาวน์*/}
          <Text style={styles.inputTitle}>เลือกเงินดาวน์</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {DOWN_PAYMENT.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.downPayment,
                  carDownPayment === item.toString() &&
                    styles.downPaymentSelect,
                ]}
                onPress={() => setCarDownPayment(item.toString())}
              >
                <Text
                  style={[
                    styles.downLabel,
                    carDownPayment === item.toString() &&
                      styles.downLabelSelect,
                  ]}
                >
                  {item}%
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/*ส่วนของเลือกระยะเวลาผ่อน*/}
          <Text style={styles.inputTitle}>ระยะเวลาผ่อน (งวด)</Text>
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
            {MONTH_OPTIONS.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.monthOption,
                  carMonth === item.toString() && styles.monthOptionSelect,
                ]}
                onPress={() => setCarMonth(item.toString())}
              >
                <Text
                  style={[
                    styles.monthLabel,
                    carMonth === item.toString() && styles.monthLabelSelect,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/*ส่วนของป้อนดอกเบี้ย*/}
          <Text style={styles.inputTitle}>ดอกเบี้ย (% ต่อปี)</Text>
          <TextInput
            placeholder="เช่น 2.50 "
            placeholderTextColor="#999"
            keyboardType="numeric"
            style={styles.inputValue}
            value={carInterest}
            onChangeText={setCarInterest}
          />

          {/*ปุ่มคำนวณค่างวด*/}
          <TouchableOpacity style={styles.btnCal}>
            <Text style={styles.labelCal}>คำนวณค่างวด</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  btnCal: {
    backgroundColor: "#2563eb",
    padding: 20,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  labelCal: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 18,
    color: "#ffffff",
  },
  downPayment: {
    backgroundColor: "#f1f5f9",
    padding: 20,
    margin: 3,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },

  downLabel: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 16,
    color: "#333333",
  },
  downPaymentSelect: {
    backgroundColor: "#262626",
  },
  downLabelSelect: {
    color: "#ffffff",
  },
  monthOption: {
    backgroundColor: "#f1f5f9",
    padding: 20,
    margin: 3,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  monthLabel: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 16,
    color: "#333333",
  },
  monthOptionSelect: {
    backgroundColor: "#262626",
  },
  monthLabelSelect: {
    color: "#ffffff",
  },
  inputValue: {
    fontFamily: "Kanit_400Regular",
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  inputTitle: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 18,
    color: "#333",
    marginTop: 18,
  },
  inputContainer: {
    backgroundColor: "#ffffff",
    //height: "100%",
    marginTop: -30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
  },
  car: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
});
