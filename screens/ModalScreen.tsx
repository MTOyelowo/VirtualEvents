import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, Platform, StyleSheet, Text } from "react-native";
import { View } from "../components/Themed";
import event from "../assets/data/event.json";
import CustomButton from "../components/CustomButton";
import users from "../assets/data/users.json";

export default function ModalScreen({ route }) {
  const id = route?.params.id;
  console.log("Rendering event ", id);

  const onJoin = () => {};

  const displayedUsers = users.slice(0, 5);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.time}>
        <AntDesign name="calendar" size={24} color={"black"} />{" "}
        {new Date(event.date).toDateString()}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.subtitle}>Attendees</Text>
        <View style={styles.users}>
          {displayedUsers?.map((user, index) => (
            <Image
              key={user.id}
              source={{ uri: user.avatarUrl }}
              style={[
                styles.userAvatar,
                { transform: [{ translateX: -15 * index }] },
              ]}
            />
          ))}
          <View
            style={[
              styles.userAvatar,
              {
                transform: [{ translateX: -15 * displayedUsers.length }],
              },
            ]}
          >
            <Text>+{users.length - displayedUsers.length}</Text>
          </View>
        </View>

        <CustomButton text="Join the event" onPress={onJoin} />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    fontSize: 20,
  },
  footer: {
    marginTop: "auto",
  },
  users: {
    flexDirection: "row",
    marginVertical: 10,
  },
  userAvatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 30,
    margin: 2,
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gainsboro",
  },
});
