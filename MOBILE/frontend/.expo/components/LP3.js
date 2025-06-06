import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const LP3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/LP/LP3.png")} style={styles.image} />
      <Text style={styles.title}>Translate to ASL</Text>
      <Text style={styles.description}>
        Convert text or audio into ASL gestures and learn how to sign in
        real-time.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.skipButton]}
          onPress={() => navigation.navigate("MainApp")} // Skip to MainApp
        >
          <Text style={styles.SkipButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.continueButton]}
          onPress={() => navigation.navigate("MainApp")} // Get Started takes user to MainApp
        >
          <Text style={styles.ContinueButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles remain the same as before
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#374ef5", // Theme color
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
    color: "#555", // Slightly lighter for contrast
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    padding: 15,
    borderRadius: 25, // Rounded corners for buttons
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  skipButton: {
    backgroundColor: "#eaeaea",
  },
  continueButton: {
    backgroundColor: "#374ef5",
  },
  ContinueButtonText: {
    color: "#fff", // White text for contrast
    fontSize: 16,
    fontWeight: "bold",
  },
  SkipButtonText: {
    color: "#374ef5",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LP3;