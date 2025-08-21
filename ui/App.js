import { SafeAreaProvider } from "react-native-safe-area-context";
import Shedule from "./src/screen/Shedule";
import Invoice from "./src/screen/Invoice";
import ModelProvider from "./src/context/ModelProvider";
import Sample from "./src/components/Sample";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const Stack = createNativeStackNavigator();
    const [fontsLoaded]=useFonts({
       "ProximaNova-Regular": require("./assets/fonts/proximanova_regular.ttf"),
      "ProximaNova-Bold": require("./assets/fonts/proximanova_bold.otf"),
    })
  
    if(!fontsLoaded){
      return null;
    }
  
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <ModelProvider>
           {/* <StatusBar style="dark" backgroundColor="#1e1e1e"/> */}
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
             
              <Stack.Screen name="Invoice" component={Invoice} />
            </Stack.Navigator>
          </NavigationContainer>
        </ModelProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
