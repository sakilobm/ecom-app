import { TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CategoryAll, Category2Screen, Category3Screen, Category4Screen } from '../Components/Screens/Category1Screen';
const Tab = createMaterialTopTabNavigator();
const CustomTabBar = props => {
    const { state } = props.navigation;
    const activeTabIndex = state.index;
    const activeTabRoute = state.routes[activeTabIndex];
    return (
        <View>
            {props.state.routes.map((route, index) => {
                const color = index === activeTabIndex ? 'red' : 'black';
                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={() => props.navigation.navigate(route.name)}
                    >
                        <Text style={{ color }}>{route.name}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

// function CustomTabBar({ state, descriptors, navigation }) {
//     return (
//         <View style={{ flexDirection: 'row' }}>
//             {state.routes.map((route, index) => {
//                 const { options } = descriptors[route.key];
//                 const label =
//                     options.tabBarLabel !== undefined
//                         ? options.tabBarLabel
//                         : options.title !== undefined
//                             ? options.title
//                             : route.name;

//                 const isFocused = state.index === index;

//                 const onPress = () => {
//                     const event = navigation.emit({
//                         type: 'tabPress',
//                         target: route.key,
//                         canPreventDefault: true,
//                     });

//                     if (!isFocused && !event.defaultPrevented) {
//                         navigation.navigate(route.name);
//                     }
//                 };

//                 const onLongPress = () => {
//                     navigation.emit({
//                         type: 'tabLongPress',
//                         target: route.key,
//                     });
//                 };

//                 return (
//                     <TouchableOpacity
//                         key={route.name}
//                         accessibilityRole="button"
//                         accessibilityStates={isFocused ? ['selected'] : []}
//                         accessibilityLabel={options.tabBarAccessibilityLabel}
//                         testID={options.tabBarTestID}
//                         onPress={onPress}
//                         onLongPress={onLongPress}
//                         style={{
//                             flex: 1,
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             backgroundColor: isFocused ? '#6200ee' : '#03DAC6',
//                             borderRadius: 50,
//                         }}
//                     >
//                         <Ionicons
//                             name={route.name}
//                             color={isFocused ? '#fff' : '#000'}
//                             size={24}
//                         />
//                         {isFocused ? (
//                             <Text style={{ color: '#fff' }}>{label}</Text>
//                         ) : null}
//                     </TouchableOpacity>
//                 );
//             })}
//         </View>
//     );
// }

{/* <Tab.Navigator tabBar={CustomTabBar}>
    <Tab.Screen name="Home" component={CategoryAll} />
    <Tab.Screen name="Profile" component={Category2Screen} />
    <Tab.Screen name="Settings" component={Category3Screen} />
</Tab.Navigator>

export default CustomTabBar; */}