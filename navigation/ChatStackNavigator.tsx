import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../screens/Chat/ChatScreen";
import ChatRoomScreen from "../screens/Chat/ChatRoomScreen";
import ChatContextProvider from "../context/ChatContext";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <ChatContextProvider>
      <Stack.Navigator>
        <Stack.Screen name="Chats" component={ChatScreen} />
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
      </Stack.Navigator>
    </ChatContextProvider>
  );
};
