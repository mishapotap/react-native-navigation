import { createStackNavigator } from "@react-navigation/stack";

import Notifications from "../screens/Notifications";
import Comments from "../screens/Comments";

const Stack = createStackNavigator();

const NotificationNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Notifications">
			<Stack.Screen name="Notifications" component={Notifications} />
			<Stack.Screen name="Comments" component={Comments} />
		</Stack.Navigator>
	);
};

export default NotificationNavigator;
