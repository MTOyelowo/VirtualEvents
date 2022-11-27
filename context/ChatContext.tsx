import { useUserData } from "@nhost/react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { StreamChat, Channel } from "stream-chat";
import { OverlayProvider, Chat } from "stream-chat-expo";
import { ActivityIndicator } from "react-native";

type ChatContextType = {
  currentChannel?: Channel;
};

export const ChatContext = createContext<ChatContextType>({
  currentChannel: undefined,
});

const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
  //component

  const [chatClient, setChatClient] = useState<StreamChat>();
  const [currentChannel, setCurrentChannel] = useState<Channel>();

  const user = useUserData();

  useEffect(() => {
    const initChat = async () => {
      if (!user) {
        return;
      }

      const client = StreamChat.getInstance("e9t46k3w5xrn");

      // get info about authenticated user
      // connect the user to stream chat

      await client.connectUser(
        {
          id: user.id,
          name: user.displayName,
          image: user.avatarUrl,
        },
        client.devToken(user.id)
      );
      setChatClient(client);

      const globalChannel = client.channel("livestream", "global", {
        name: "notJust.dev",
      });
      await globalChannel.watch();
    };

    initChat();
  }, []);

  useEffect(() => {
    return () => {
      if (chatClient) {
        chatClient.disconnectUser();
      }
    };
  }, []);

  if (!chatClient) {
    return <ActivityIndicator />;
  }

  const value = { chatClient, currentChannel, setCurrentChannel };
  return (
    <OverlayProvider>
      <Chat client={chatClient}>
        <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
      </Chat>
    </OverlayProvider>
  );
};

export const useChatContext = () => useContext(ChatContext);

export default ChatContextProvider;
