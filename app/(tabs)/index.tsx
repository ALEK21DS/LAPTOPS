import {NavigationIndependentTree} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {LaptopsList} from "../screens/LaptopsList"
import {LaptopsForm} from "../screens/LaptopsForm"

export default function HomeScreen() {
  const StackLaptops = createNativeStackNavigator();
  return(
    <NavigationIndependentTree>
      <StackLaptops.Navigator initialRouteName="LaptopsListNav">
        <StackLaptops.Screen
          name = "LaptopsListNav"
          component={LaptopsList}
        />
        <StackLaptops.Screen
          name = "LaptopsFormNav"
          component={LaptopsForm}
        />
      </StackLaptops.Navigator>
    </NavigationIndependentTree>
  )
}

