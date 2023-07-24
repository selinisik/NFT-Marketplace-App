import { View, Text , Image, StyleSheet} from 'react-native'
import React from 'react'
import { ETHPrice } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../../constants'

const DetailsBid = ({bid}) => {
    const {container, bidImg, bidName, bidDate} = styles
  return (
    <View style={container}>
        <Image source={bid.image}  resizeMode='contain' style={bidImg}/>
      <View>
        <Text style={bidName}>
            Bid placed by {bid.name}
        </Text>
        <Text style={bidDate}>
            {bid.date}
        </Text>
      </View>
      <ETHPrice price={bid.price} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:SIZES.base,
        paddingHorizontal: SIZES.base *2,
    },
    bidImg:{
        width: 48,
        height: 48,
    },
    bidName:{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
    bidDate:{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small - 2,
        color: COLORS.secondary,
        marginTop: 3
    }
})
export default DetailsBid