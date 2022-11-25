import { View, Text, FlatList } from "react-native";
import React from "react";
import UserListItem from "../components/UserListItem";
import users from "../assets/data/users.json";

const UsersScreen = () => {
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserListItem user={item} />}
    />
  );
};
export default UsersScreen;
