import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { ETHPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../../constants";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  const {
    container,
    descriptionTextContainer,
    descriptionText,
    descriptionContainer,
    description,
    readMoreStyle,
  } = styles;
  return (
    <>
      <View style={container}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <ETHPrice price={data.price} />
      </View>
      <View style={descriptionTextContainer}>
        <Text style={descriptionText}>Description</Text>
        <View style={descriptionContainer}>
          <Text
            style={description}
            onPress={() => {
              if (!readMore) {
                setText(data.description);
                setReadMore(true);
              } else {
                setText(data.description.slice(0, 100));
                setReadMore(false);
              }
            }}
          >
            {text}
            {!readMore && "..."}
            <Text style={readMoreStyle}>
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionTextContainer: {
    marginVertical: SIZES.extraLarge * 1.5,
  },
  descriptionText: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
  descriptionContainer: {
    marginTop: SIZES.base,
  },
  description: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    lineHeight: SIZES.large,
  },
  readMoreStyle: {
    fontSize: SIZES.small,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});
export default DetailsDesc;
