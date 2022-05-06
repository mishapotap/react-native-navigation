import { createStackNavigator } from "@react-navigation/stack";

import Friends from "../screens/Friends";
import Friend from "../screens/Friend";

const Stack = createStackNavigator();

const FriendsNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Friends">
			<Stack.Screen
				name="Friends"
				component={Friends}
                options={{headerShown: false}}
			/>
			<Stack.Screen name="Friend" component={Friend} options={({ route }) => ({ title: route.params.name })}/>
		</Stack.Navigator>
	);
};

export default FriendsNavigator;
