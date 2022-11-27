import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../screens/Chat/ChatScreen";
import ChatRoomScreen from "../screens/Chat/ChatRoomScreen";
import UsersScreen from "../screens/UsersScreen";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chats"
        component={ChatScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Users")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="users"
                size={25}
                color={"dimgray"}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Users" component={UsersScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
