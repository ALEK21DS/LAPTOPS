import {NavigationIndependentTree} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {LaptopsList} from "../screens/LaptopsList"

export default function HomeScreen() {
  const StackLaptops = createNativeStackNavigator();
  return(
    <NavigationIndependentTree>
      <StackLaptops.Navigator>
        <StackLaptops.Screen
          name = "LaptopsListNav"
          component={LaptopsList}
        />
      </StackLaptops.Navigator>
    </NavigationIndependentTree>
  )
}

