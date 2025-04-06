import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // centraliza verticalmente
    alignItems: 'center',      // centraliza horizontalmente
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    marginTop: 10,
    fontWeight: '600',
    
  },
  input: {
    width: '100%',
    fontSize: 18,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
  },
  resultado: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },

  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  
});

export default styles;
