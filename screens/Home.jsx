import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Button,
  DrawerActions,
  Modal,
} from "react-native";
import { useState, useCallback, useEffect, useLayoutEffect } from "react";
import React from "react";
import { globalStyles } from "../styles/global";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Data from "./Data";
import { Ionicons } from "@expo/vector-icons";

let fontLoader = () => {
  return Font.loadAsync({
    "Caladea-Bold": require("../assets/fonts/Caladea-Bold.ttf"),
    "Caladea-Regular": require("../assets/fonts/Caladea-Regular.ttf"),
  });
};
const Home = ({ navigation }) => {
  const [isloaded, setIsloaded] = useState(false);
  const [data, setData] = useState(Data);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await fontLoader();
        //
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsloaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isloaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isloaded]);

  if (!isloaded) {
    return null;
  }
  return (
    <View style={globalStyles.container} onLayout={onLayoutRootView}>
      <Ionicons name="add-circle" size={24} color="black" onPress={()=> setToggle(true)} />
      <View>
        <Modal visible={toggle} animationType="slide">
          <View style={styles.modalView}>
          <Ionicons name="close-circle-sharp" size={24} color="black" onPress={()=> setToggle(false)} />
            <Text>Hello</Text>
          </View>
        </Modal>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Pressable
              onPress={() =>
                navigation.navigate("Reviewdetails", {
                  id: item.id,
                  name: item.name,
                })
              }
            >
              <View style={styles.reviewsContainer}>
                <Text style={styles.reviewRating}>{item.rating}</Text>
                <Text>{item.title}</Text>
              </View>
            </Pressable>
          </View>
        )}
        key={({ item }) => item.key}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Caladea-Bold",
  },
  reviewsContainer: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
  },
  reviewRating: {
    fontFamily: "Caladea-Bold",
    fontSize: 30,
    marginRight: 5,
  },
  modalView: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});
