import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/AddToCartComponents/Header'
import TabMenu from '../Components/AddToCartComponents/TabMenu'
import TotalContainer from '../Components/AddToCartComponents/TotalContainer'
import PaymentButton from '../Components/AddToCartComponents/PaymentButton'

const AddToCartScreen = () => {
    return (
        <View>
            <Header />
            <TabMenu/>
            <View style={{ alignItems: 'center', flexDirection: 'column', }} >
                <TotalContainer />
                <PaymentButton />
            </View>
        </View>
    )
}

export default AddToCartScreen;