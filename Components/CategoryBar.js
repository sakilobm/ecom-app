// import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { BottomTabNavigationState } from '@react-navigation/bottom-tabs'
import { CategoryAll, Category2Screen, Category3Screen, Category4Screen } from './Screens/Category1Screen';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
// import ALLSVG from '../assets/svg/Coffee Cup 2.svg'
const Tab = createMaterialTopTabNavigator();

const CategoryBar = () => {
    const [showLabel, setShowLabel] = useState(false);
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarItemStyle: { width: 100, height: 90, },
                tabBarStyle: {
                    backgroundColor: '#F7F6F9',
                    borderRadius: 38,
                },
                showLabel: showLabel,
            }} independent={true} initialRouteName="Home"
            >

                <Tab.Screen
                    name="All"
                    component={CategoryAll}
                    options={{
                        title: 'All',
                        tabBarLabel: 'All',
                        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                        tabBarIcon: ({ tintColor }) => (
                            <Ionicons size={25} name="layers-outline" color="#DBBF2E" ></Ionicons>
                        ),
                        tabBarOnPress: () => setShowLabel(!showLabel),
                    }} />
                <Tab.Screen
                    name="Mugs"
                    component={Category2Screen}
                    options={{
                        title: 'Mugs',
                        tabBarLabel: 'Mugs',
                        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                        tabBarIcon: ({ tintColor }) => (
                            <Ionicons size={25} name="cafe-outline" color="#DBBF2E" ></Ionicons>
                        ),
                        tabBarOnPress: () => setShowLabel(!showLabel)
                    }} />
                <Tab.Screen
                    name="Frames"
                    component={Category3Screen}
                    options={{
                        title: 'Frames',
                        tabBarLabel: 'Frames',
                        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                        tabBarIcon: ({ tintColor }) => (
                            <Ionicons size={25} name="images-outline" color="#DBBF2E" ></Ionicons>
                        ),
                        tabBarOnPress: () => setShowLabel(!showLabel)
                    }} />
                <Tab.Screen
                    name="Albums"
                    component={Category4Screen}
                    options={{
                        title: 'Albums',
                        tabBarLabel: 'Albums',
                        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                        tabBarIcon: ({ tintColor }) => (
                            <Ionicons size={25} name="albums-outline" color="#DBBF2E" ></Ionicons>
                        ),
                        tabBarOnPress: () => setShowLabel(!showLabel)
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default CategoryBar;