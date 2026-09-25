import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  Pressable,
} from "react-native";

export default function Index() {
  const [screen, setScreen] = useState(1);

  return (
    <View style={styles.container}>
      {/* SCREEN 1 — Keyboard covers content */}
      {screen === 1 && (
        <View style={styles.screen}>
          <Text style={styles.step}>1 / 5</Text>
          <Text style={styles.heading}>No fixes</Text>

          <View style={styles.formArea}>
            <Text style={styles.formTitle}>Sign Up</Text>

            <TextInput placeholder="Name" style={styles.input} />

            <TextInput placeholder="Email" style={styles.input} />

            <Button title="Create Account" onPress={() => {}} />
          </View>

          <View style={styles.navigation}>
            <Button title="Next" onPress={() => setScreen(2)} />
          </View>
        </View>
      )}

      {/* SCREEN 2 — KeyboardAvoidingView */}
      {screen === 2 && (
        <KeyboardAvoidingView
          style={styles.screen}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.step}>2 / 5</Text>
          <Text style={styles.heading}>KeyboardAvoidingView</Text>

          <View style={styles.formArea}>
            <Text style={styles.formTitle}>Sign Up</Text>

            <TextInput placeholder="Name" style={styles.input} />

            <TextInput placeholder="Email" style={styles.input} />

            <Button title="Create Account" onPress={() => {}} />
          </View>

          <View style={styles.navigation}>
            <Button title="Next" onPress={() => setScreen(3)} />
          </View>
        </KeyboardAvoidingView>
      )}

      {/* SCREEN 3 — KAV isn't enough */}
      {screen === 3 && (
        <KeyboardAvoidingView
          style={styles.screen}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.step}>3 / 5</Text>
          <Text style={styles.heading}>But what about a long form?</Text>

          <View style={styles.formArea}>
            <Text style={styles.formTitle}>Create Account</Text>

            <TextInput placeholder="First Name" style={styles.input} />

            <TextInput placeholder="Last Name" style={styles.input} />

            <TextInput placeholder="Email" style={styles.input} />

            <TextInput placeholder="Phone" style={styles.input} />

            <TextInput placeholder="Address" style={styles.input} />

            <TextInput placeholder="City" style={styles.input} />

            <TextInput placeholder="State" style={styles.input} />

            <Button title="Create Account" onPress={() => {}} />
          </View>

          <View style={styles.navigation}>
            <Button title="Next" onPress={() => setScreen(4)} />
          </View>
        </KeyboardAvoidingView>
      )}

      {/* SCREEN 4 — KAV + ScrollView */}
      {screen === 4 && (
        <KeyboardAvoidingView
          style={styles.screen}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.step}>4 / 5</Text>
          <Text style={styles.heading}>Add a ScrollView</Text>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.longForm}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.formTitle}>Create Account</Text>

            <TextInput placeholder="First Name" style={styles.input} />

            <TextInput placeholder="Last Name" style={styles.input} />

            <TextInput placeholder="Email" style={styles.input} />

            <TextInput placeholder="Phone" style={styles.input} />

            <TextInput placeholder="Address" style={styles.input} />

            <TextInput placeholder="City" style={styles.input} />

            <TextInput placeholder="State" style={styles.input} />

            <Button title="Create Account" onPress={() => {}} />

            <View style={styles.insideNavigation}>
              <Button title="Next" onPress={() => setScreen(5)} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}

      {/* SCREEN 5 — Dismiss keyboard */}
      {screen === 5 && (
        <KeyboardAvoidingView
          style={styles.screen}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Pressable style={styles.dismissArea} onPress={Keyboard.dismiss}>
            <Text style={styles.step}>5 / 5</Text>
            <Text style={styles.heading}>Dismiss the keyboard</Text>

            <View style={styles.dismissForm}>
              <Text style={styles.formTitle}>Write a Message</Text>

              <TextInput
                placeholder="Type something..."
                style={styles.messageInput}
                multiline
              />

              <Text style={styles.hint}>Tap anywhere outside the input.</Text>
            </View>
          </Pressable>

          <View style={styles.navigation}>
            <Button title="Restart" onPress={() => setScreen(1)} />
          </View>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },

  screen: {
    flex: 1,
    paddingHorizontal: 80,
    paddingTop: 45,
    paddingBottom: 30,
  },

  step: {
    fontSize: 14,
    color: "#777",
    marginBottom: 6,
  },

  heading: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 25,
  },

  formArea: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "center",
    width: "100%",
    maxWidth: 600,
    gap: 14,
    paddingBottom: 25,
  },

  longForm: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 600,
    gap: 14,
    paddingBottom: 25,
  },

  scrollView: {
    flex: 1,
  },

  formTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 10,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },

  messageInput: {
    height: 150,
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 10,
    padding: 16,
    backgroundColor: "white",
    textAlignVertical: "top",
  },

  dismissForm: {
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
    marginTop: 30,
  },

  hint: {
    marginTop: 12,
    color: "#777",
  },

  navigation: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 600,
    paddingTop: 12,
  },

  insideNavigation: {
    marginTop: 15,
  },

  dismissArea: {
    flex: 1,
  },
});
