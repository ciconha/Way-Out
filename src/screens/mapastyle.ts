import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#06c9c9", 
    padding: 20,
  },
  mapa: {
    width: "100%",
    height: 290,
    borderRadius: 10,
    overflow: "hidden",
  },
  button: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#000000",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
