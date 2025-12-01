import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: "90%",
    alignSelf: "center",
    borderBottomWidth: 1,
    backgroundColor: "transparent",
    borderColor: "#c1c1c1",
    color: "#fff",
    padding: 20,
    marginBottom: 15,
  },

  head: {
    width: "100%",
    backgroundColor: "#DC143C",
  },

  button: {
    backgroundColor: "#DC143C",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 5,
    width: "90%",
  },
  
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
});
