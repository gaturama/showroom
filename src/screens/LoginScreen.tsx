import { useCallback, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/stylesLogin";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useFocusEffect } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const users = [
  { id: 1, email: "teste@email.com", password: 1234 },
  { id: 2, email: "email@gmail.com", password: 234 },
];

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setEmail("");
      setPassword("");
    }, [])
  );

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password.toString() === password
    );

    if (user) {
      navigation.navigate("Home");
    } else {
      alert("Email ou senhas incorretos!");
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={[styles.container, { backgroundColor: "#121212" }]}>
      <Image source={require("../assets/jms_logo.png")} style={styles.image} />

      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Email"
        placeholderTextColor={"#fff"}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={!showPassword}
        placeholder="Password"
        placeholderTextColor={"#fff"}
        keyboardType="numeric"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TouchableOpacity onPress={toggleShowPassword} style={styles.icon}>
        <Image
          source={
            showPassword
              ? require("../assets/ic_eye_closed.png")
              : require("../assets/ic_eye.png")
          }
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.textCadastro}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
