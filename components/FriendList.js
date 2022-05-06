import React from "react";
import { FlatList } from "react-native";
import Friend from "./Friend";

const FriendList = ({ friends, goToFriend }) => {
	return (
		<FlatList
			data={friends}
			renderItem={({ item }) => <Friend name={item.name} goToFriend={goToFriend} />}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default FriendList;
