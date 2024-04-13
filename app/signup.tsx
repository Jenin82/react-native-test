import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
} from "react-native";
import google from "../assets/screenBg/google.png";
import logo from "../assets/images/icon.png";
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
  const [showModal, setShowModal] = useState(false);
  const [showModalNo, setShowModalNo] = useState(false);
  const navigation = useNavigation();
  const handleSignup = () => {
    navigation.navigate("home");
  };
  const handleNotEligible = () => {
    setShowModal(false);

    setShowModalNo(true);
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.textColor}>
          Revolutionize your Smoking Experience
        </Text>
        <TouchableOpacity style={styles.btn} onPress={handleSignup}>
          <Image source={google} style={styles.icon} />
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={handleNotEligible}
      >
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Image source={logo} style={styles.modalIcon} />
              <TouchableOpacity onPress={handleNotEligible}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.modalText}>Are you 21 or older?</Text>
              <Text style={styles.modalTextPara}>
                Please confirm that you're 21 years old or above to proceed.
              </Text>
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "green" }]}
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "red" }]}
                onPress={handleNotEligible}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={showModalNo}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowModalNo(false)}
      >
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Image source={logo} style={styles.modalIcon} />
              <TouchableOpacity
                onPress={() => {
                  setShowModalNo(false);
                }}
              >
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.modalText}>
                Sorry, You are not authorized to use this application
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  safeArea: {
    alignItems: "center",
    padding: 30,
    paddingBottom: 80,
  },
  textColor: {
    color: "black",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    width: 300,
  },
  btnText: {
    color: "black",
    fontSize: 16,
    marginLeft: 10,
    textAlign: "center",
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  modalIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  closeButtonText: {
    color: "#667085",
    fontSize: 18,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 5,

    textAlign: "left",
    fontWeight: "600",
  },
  modalTextPara: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "left",
  },
});
