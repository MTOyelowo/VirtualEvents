import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useChatContext } from "../../context/ChatContext";

const ChatScreen = () => {
  const { username } = useChatContext();
  return (
    <View>
      <Text>{username}</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
