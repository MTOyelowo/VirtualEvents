import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useChatContext } from "../../context/ChatContext";
import { ChannelList } from "stream-chat-expo";
import { Channel } from "stream-chat";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  const { setCurrentChannel } = useChatContext();

  const navigation = useNavigation();

  const onSelect = (channel: Channel) => {
    setCurrentChannel(channel);
    navigation.navigate("ChatRoom");
  };
  return <ChannelList onSelect={onSelect} />;
};

export default ChatScreen;

const styles = StyleSheet.create({});
