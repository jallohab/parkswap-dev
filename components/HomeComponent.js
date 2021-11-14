import * as React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";

const image = {
  uri: "https://www.proficientz.com/wp-content/uploads/2018/08/product-marketing-roadmap.jpg",
};

const ParkSwapAvator = () => {
  return (
    <View>
      <Text
        style={{
          marginTop: 50,
          textAlign: "center",
          fontWeight: "bold",
          color: "#b98046",
          fontSize: 30,
        }}
      >
        ParkSwap
      </Text>
      <Avatar
        source={require("../assets/parkswap.png")}
        size={350}
        rounded
        title="PS"
        activeOpacity={0.1}
        containerStyle={{
          justifyContent: "center",
          display: "flex",
          marginLeft: 22,
          marginTop: 30,
          borderWidth: 0.25,
          borderColor: "#b98046",
          borderStyle: "solid",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 50,
          marginLeft: 22,
          // borderWidth: 1,
        }}
      >
        <TouchableOpacity
          style={{
            // borderWidth: 5,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 162,
            height: 45,
            backgroundColor: "#b98046",
            borderRadius: 2,
          }}
        >
          <Text>LOOKING FOR PARKING</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // borderWidth: 5,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 162,
            height: 45,
            backgroundColor: "#b98046",
            borderRadius: 2,
          }}
        >
          <Text>LEAVING A PARKING</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        resizeMode={"stretch"}
        style={{ flex: 1 }}
        source={image}
      >
        <ParkSwapAvator />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: 330,
  },

  image: {
    flex: 1,
    width: null,
    height: null,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
});

export default Home;
