import { createDrawerNavigator } from "@react-navigation/drawer";
import FriendsNavigator from "./FriendsNavigator";

import Another from "../screens/Another";
import Groups from "../screens/Groups";
import Music from "../screens/Music";

const Drawer = createDrawerNavigator();

const AnotherNavigator = () => {
	return (
		<Drawer.Navigator initialRouteName="Another">
			<Drawer.Screen name="Another" component={Another} />
			<Drawer.Screen name="Groups" component={Groups} />
			<Drawer.Screen name="Music" component={Music} />
			<Drawer.Screen name="Friends" component={FriendsNavigator} options={{headerShown: false}}/>
		</Drawer.Navigator>
	);
};

export default AnotherNavigator;
