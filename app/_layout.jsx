import { Stack } from "expo-router";

const RootLayout = () => {
  return (<Stack 
  screenOptions={{
    headerStyle:{
      backgroundColor: "yellow"
    },
    headerTitleStyle:{
      fontSize: 26,
    }
  }}>
    <Stack.Screen name="index" options={{title:"Home"}} />
  </Stack>);
}

export default RootLayout;