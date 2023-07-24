import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, assets } from "../../constants";

const HomeHeader = ({onSearch}) => {
  const {
    mainContainer,
    header,
    logo,
    profile,
    profileImg,
    profileIcon,
    welcome,
    welcomeText1,
    welcomeText2,
    searchContainer,
    searchIcon,
    searchKeyword,
    searchView,
  } = styles;
  return (
    <View style={mainContainer}>
      <View style={header}>
        <Image source={assets.logo} resizeMode="contain" style={logo} />
        <View style={profile}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={profileImg}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={profileIcon}
          />
        </View>
      </View>
      <View style={welcome}>
        <Text style={welcomeText1}>Hello, Celine 👋</Text>
        <Text style={welcomeText2}>Let's find a masterpiece</Text>
      </View>
      <View style={searchContainer}>
        <View style={searchView}>
         <Image source={assets.search} resizeMode="contain" style={searchIcon}/> 
        <TextInput placeholder="Search NFTs" style={searchKeyword} onChangeText={onSearch}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 25,
  },
  profile: {
    width: 45,
    height: 45,
  },
  profileImg: {
    width: "100%",
    height: "100%",
  },
  profileIcon: {
    position: "absolute",
    width: 15,
    height: 15,
    right: 0,
    bottom: 0,
  },
  welcome: { marginVertical: SIZES.font },
  welcomeText1: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  welcomeText2: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    paddingTop: SIZES.base/2,
  },
  searchContainer: {
    marginTop: SIZES.font,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight:SIZES.base,
  },
  searchKeyword: {
    flex: 1,
  },
  searchView: {
    width :"100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small -2,
  }
});

export default HomeHeader;
