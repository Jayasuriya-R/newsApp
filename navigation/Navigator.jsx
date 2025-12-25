import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllNews from "../screens/AllNews";
import LatestNews from "../screens/LatestNews";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const navigationController =  () =>{
    return <NavigationContainer>

    </NavigationContainer>
}

const tabNavigation = () =>{
    return <Tab.Navigator>
        <Tab.Screen name="latestNews" component={<AllNews/>}/>
        <Tab.Screen name="AllNews" component={<LatestNews/>}/>
    </Tab.Navigator>
}