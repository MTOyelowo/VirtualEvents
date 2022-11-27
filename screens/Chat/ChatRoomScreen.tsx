import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useChatContext } from "../../context/ChatContext";
import { Channel, MessageInput, MessageList } from "stream-chat-expo";
import { useNavigation } from "@react-navigation/native";

const ChatRoomScreen = () => {
  const { currentChannel } = useChatContext();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: currentChannel?.data?.name || "Channel" });
  }, [currentChannel?.data?.name]);
  return (
    <Channel channel={currentChannel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({});
