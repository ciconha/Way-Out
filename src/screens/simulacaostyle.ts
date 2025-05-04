import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#49b398",
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  warning: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,  
    borderColor: "black",  
    marginTop:29,
  
  },
  safe: { 
    fontSize: 16,
    color: "green",
    backgroundColor: "#1cd6ba",
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,  
    borderColor: "black",  
    marginTop:1
  },
  alert: {  
    fontSize: 16,
    color: "red",
    backgroundColor: "#1cd6ba",
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,  
    borderColor: "black",  
    marginTop:1
  },
  route: {  
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
    marginVertical: 10,
  },
  info: {  
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
    marginTop: 29,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,  
    borderColor: "black", 
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#c77fad",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
