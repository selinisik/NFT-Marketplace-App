import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { COLORS, SIZES, SHADOWS, assets } from "../../constants";
import { CircleButton, RectButton } from "../components/Button";
import { SubInfo, ETHPrice, NFTTitle } from "../components/SubInfo";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  const { container, main, imageStyle, NftTitle, EthPriceStyle } = styles;
  return (
    <View style={container}>
      <View style={main}>
        <Image source={data.image} resizeMode="cover" style={imageStyle} />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={NftTitle}>
        <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.large} subTitleSize={SIZES.small} />
        <View style={EthPriceStyle}>
          <ETHPrice price={data.price}/>
          <RectButton minWidth={120} fontSize = {SIZES.font} handlePress= { () => navigation.navigate("Details", {data})}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  main: {
    width: "100%",
    height: 250,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
  NftTitle: {
    width: "100%",
    padding: SIZES.font,
  },
  EthPriceStyle: {
    marginTop:SIZES.font,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});
export default NFTCard;
