import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationNavigator from "./NotificationNavigator";
import AnotherNavigator from "./AnotherNavigator";

import Feeds from "../screens/Feeds";
import Search from "../screens/Search";
import Messages from "../screens/Messages";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName="Search">
				<Tab.Screen name="Feeds" component={Feeds} />
				<Tab.Screen name="Messages" component={Messages} />
				<Tab.Screen name="Search" component={Search} />
				<Tab.Screen name="Notifications" component={NotificationNavigator} options={{headerShown: false}}/>
				<Tab.Screen name="Another" component={AnotherNavigator} options={{headerShown: false}}/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
