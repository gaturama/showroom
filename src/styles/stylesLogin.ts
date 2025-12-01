import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  input: {
    width: "95%",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderColor: "#c1c1c1",
    color: "#FFF",
    padding: 20,
    marginBottom: 15
  },

  image: {
    padding: 20,
    width: 280,
    height: 160,
    alignSelf: "center",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#DC143C",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 5,
    width: "100%",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },

  icon: {
    position: "absolute",
    right: 35,
    top: "35%",
    transform: [{ translateY: -11 }],
    padding: 5,
    marginTop: 205,
    tintColor: "#fff"
  },

  textCadastro: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "center",
    alignItems: "center",
  },
});