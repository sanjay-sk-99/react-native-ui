import { SafeAreaProvider } from "react-native-safe-area-context";
import Shedule from "./src/screen/Shedule";
import Invoice from "./src/screen/Invoice";
import ModelProvider from "./src/context/ModelProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";

export default function App() {
  const Stack = createNativeStackNavigator();

  // font configuration
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
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name="shedule" component={Shedule}/>
              <Stack.Screen name="invoice" component={Invoice} />
            </Stack.Navigator>
          </NavigationContainer>
        </ModelProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
