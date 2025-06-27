import NotesImage from '@/assets/images/post-it.png';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  
  return (
    <View
      style={style.container}
    >
      <Image source={NotesImage} style={style.image} />
      <Text style={style.title}>Welcome to Notes App</Text>
      <Text style={style.subtitle}>Capture you thoughts anywhere anytime</Text>

      <TouchableOpacity style={style.button} onPress={()=>router.push('/notes')}>
        <Text style={style.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#f8f9fa',
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 10
  },
  title:{
    fontSize: 16,
    fontWeight: 'bold',
    color:'#333',
    marginBottom: 10
  },
  subtitle:{
    marginBottom: 20,
    color: '#666',
    fontSize: 16,
    textAlign: 'center'
  },
  button:{
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center"

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight:"bold"
  },
})