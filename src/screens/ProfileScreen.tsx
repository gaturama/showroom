import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { styles } from "../styles/stylesProfile";
import { Appbar, TextInput } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({ navigation }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleEdit = () => {
    if (!name || !email || !password || !phone) {
      alert("Preencha todos os campos antes de salvar!");
      return;
    }

    alert("Informações atualizadas com sucesso!");
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

      <TouchableOpacity style={styles.button} onPress={handleEdit}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}
