import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import { COLORS, NFTData } from "../../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  const handleSearch = (value) => {
    if (!value.length) {
      return setNftData(NFTData);
    }
    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredData.length) {
      setNftData(filteredData);
    }else{
      setNftData(NFTData)
    }
  };

  const { container, main, NftContainer, bgColorNft, bgColor1, bgColor2 } =
    styles;
  return (
    <SafeAreaView style={container}>
      <FocusedStatusBar bbackground={COLORS.primary} />
      <View style={main}>
        <View style={NftContainer}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch ={handleSearch} />}
          />
        </View>
        <View style={bgColorNft}>
          <View style={bgColor1} />
          <View style={bgColor2} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  NftContainer: {
    zIndex: 0,
  },
  bgColorNft: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  bgColor1: {
    height: 300,
    backgroundColor: COLORS.primary,
  },
  bgColor2: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default Home;
