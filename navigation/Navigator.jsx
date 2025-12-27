import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllNews from "../screens/AllNews";
import LatestNews from "../screens/LatestNews";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewsDetail from "../components/NewsDetail";


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const NavigationController = () => {
    return <NavigationContainer>
        <TabNavigators />
    </NavigationContainer>
}

const TabNavigators = () => {
    return <Tab.Navigator  screenOptions={({ route }) => ({
       
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "latestNews") {
        iconName = focused ? "newspaper" : "newspaper-variant-outline";
      } else if (route.name === "AllNews") {
        iconName = focused ? "format-list-bulleted" : "format-list-checkbox";
      }

      return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
    }
  })}>
        <Tab.Screen name="latestNews" component={LatestNewsStack} options={{ headerShown: false }}/>
        <Tab.Screen name="AllNews" component={AllNewsStack}  options={{ headerShown: false }}/>
    </Tab.Navigator>
}

const LatestNewsStack = ()=>{
  return <Stack.Navigator>
    <Stack.Screen name='latestNews' component={LatestNews}/>
    <Stack.Screen name="newsDetail" component={NewsDetail}/>
    
  </Stack.Navigator>
}

const AllNewsStack = ()=>{
  return <Stack.Navigator>
    <Stack.Screen name='AllNews' component={AllNews}/>
    <Stack.Screen name="newsDetail" component={NewsDetail}/>
    
  </Stack.Navigator>
}
 
export default NavigationController