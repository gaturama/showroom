import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View, Alert, TextInput, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { useState } from "react";
import { styles } from "../styles/stylesRegister";
import { Appbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [dateBirth, setDateBirth] = useState("");

  const handleRegister = () => {
    if (!name || !email || !phone || !password || !dateBirth) {
      Alert.alert("Error", "Fill all fields");
      return;
    }

    Alert.alert("Success", "User ${name} registered successfully");
    navigation.navigate("Login");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <Appbar.Header style={styles.head}>
        <Appbar.BackAction onPress={() => navigation.goBack()} color="#fff" />
        <Appbar.Content title="Register" color="#fff" />
      </Appbar.Header>

      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Name"
        placeholderTextColor={"#fff"}
        value={name}
        onChangeText={setName}
        style={[styles.input, { marginTop: 100 }]}
      />

      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Email"
        placeholderTextColor={"#fff"}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Phone"
        placeholderTextColor={"#fff"}
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-pad"
      />

      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Password"
        placeholderTextColor={"#fff"}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry={true}
        keyboardType="numeric"
      />

      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Date of Birth"
        placeholderTextColor={"#fff"}
        value={dateBirth}
        onChangeText={setDateBirth}
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
