import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

const SecOnboardScreen = ({ navigation }) => {
    const pinkBubble = `<svg width="368" height="334" viewBox="0 0 368 334" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_dddddd_319_148)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M180.715 0.00454909C249.078 -0.480226 317.032 37.803 334.374 103.916C349.712 162.386 295.025 208.517 243.856 240.716C204.627 265.4 157.109 265.017 118.082 240.017C68.931 208.533 18.884 162.518 33.6201 106.049C50.4914 41.3973 113.885 0.478451 180.715 0.00454909Z" fill="#FF2E93"/>
    </g>
    <defs>
    <filter id="filter0_dddddd_319_148" x="0" y="0" width="368" height="334" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1.21759"/>
    <feGaussianBlur stdDeviation="0.428925"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.030926 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_148"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="2.92604"/>
    <feGaussianBlur stdDeviation="1.03077"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0444282 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_319_148" result="effect2_dropShadow_319_148"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="5.50948"/>
    <feGaussianBlur stdDeviation="1.94084"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.055 0"/>
    <feBlend mode="normal" in2="effect2_dropShadow_319_148" result="effect3_dropShadow_319_148"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="9.82798"/>
    <feGaussianBlur stdDeviation="3.46213"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0655718 0"/>
    <feBlend mode="normal" in2="effect3_dropShadow_319_148" result="effect4_dropShadow_319_148"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="18.3821"/>
    <feGaussianBlur stdDeviation="6.47553"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.079074 0"/>
    <feBlend mode="normal" in2="effect4_dropShadow_319_148" result="effect5_dropShadow_319_148"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="44"/>
    <feGaussianBlur stdDeviation="15.5"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"/>
    <feBlend mode="normal" in2="effect5_dropShadow_319_148" result="effect6_dropShadow_319_148"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_319_148" result="shape"/>
    </filter>
    </defs>
    </svg>
    `;
    const svgXml = `<svg width="117" height="107" viewBox="0 0 117 107" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_319_152)">
    <mask id="mask0_319_152" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-45" y="0" width="158" height="158">
    <circle cx="34" cy="79" r="79" fill="#142664"/>
    </mask>
    <g mask="url(#mask0_319_152)">
    <circle cx="15.8363" cy="3.4626" r="3.4626" fill="#142664"/>
    <circle cx="15.8363" cy="24.9306" r="3.4626" fill="#142664"/>
    <circle cx="15.8363" cy="46.3989" r="3.4626" fill="#142664"/>
    <circle cx="15.8363" cy="67.8669" r="3.4626" fill="#142664"/>
    <circle cx="15.8363" cy="89.3352" r="3.4626" fill="#142664"/>
    <circle cx="35.2268" cy="3.4626" r="3.4626" fill="#142664"/>
    <circle cx="35.2268" cy="24.9306" r="3.4626" fill="#142664"/>
    <circle cx="35.2268" cy="46.3989" r="3.4626" fill="#142664"/>
    <circle cx="35.2268" cy="67.8669" r="3.4626" fill="#142664"/>
    <circle cx="35.2268" cy="89.3352" r="3.4626" fill="#142664"/>
    <circle cx="54.6174" cy="3.4626" r="3.4626" fill="#142664"/>
    <circle cx="54.6174" cy="24.9306" r="3.4626" fill="#142664"/>
    <circle cx="54.6174" cy="46.3989" r="3.4626" fill="#142664"/>
    <circle cx="54.6174" cy="67.8669" r="3.4626" fill="#142664"/>
    <circle cx="54.6174" cy="89.3352" r="3.4626" fill="#142664"/>
    <circle cx="74.008" cy="3.4626" r="3.4626" fill="#142664"/>
    <circle cx="74.008" cy="24.9306" r="3.4626" fill="#142664"/>
    <circle cx="74.008" cy="46.3989" r="3.4626" fill="#142664"/>
    <circle cx="74.008" cy="67.8669" r="3.4626" fill="#142664"/>
    <circle cx="74.008" cy="89.3352" r="3.4626" fill="#142664"/>
    <circle cx="93.3985" cy="3.4626" r="3.4626" fill="#142664"/>
    <circle cx="93.3985" cy="24.9306" r="3.4626" fill="#142664"/>
    <circle cx="93.3985" cy="46.3989" r="3.4626" fill="#142664"/>
    <circle cx="93.3985" cy="67.8669" r="3.4626" fill="#142664"/>
    <circle cx="93.3985" cy="89.3352" r="3.4626" fill="#142664"/>
    <circle cx="112.789" cy="3.4626" r="3.4626" fill="#142664"/>
    <circle cx="112.789" cy="24.9306" r="3.4626" fill="#142664"/>
    <circle cx="112.789" cy="46.3989" r="3.4626" fill="#142664"/>
    <circle cx="112.789" cy="67.8669" r="3.4626" fill="#142664"/>
    <circle cx="112.789" cy="89.3352" r="3.4626" fill="#142664"/>
    </g>
    </g>
    <defs>
    <filter id="filter0_d_319_152" x="-49" y="0" width="166" height="165.202" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_152"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_152" result="shape"/>
    </filter>
    </defs>
    </svg>
    `;
    return (
        <View style={{ width: width, height: height, }}>
            <Text style={styles.skip}>Skip</Text>
            <View style={{ marginTop: width / 2.5, }}>
                <SvgXml style={{ alignSelf: 'center', }} xml={pinkBubble} width={306} height={259} />
                <Image source={require('../../assets/png/Photographer_portfolio.png')} style={styles.png} ></Image>
            </View>
            <View style={{ marginLeft: 20, marginRight: 10, }}>
                <Text style={styles.bigTitleTop}>Preserve your</Text>
                <Text style={styles.bigTitleDown}>Memories</Text>
                <Text style={styles.subTitle}>We make your photos to lovable memories with our products</Text>
            </View>
            <Image source={require('../../assets/png/Sec_Screen_Dots.png')} style={styles.doodleDots} />
            <TouchableOpacity onPress={() => navigation.navigate('SecOnboardScreen')} style={styles.backBtn}>
                <AntDesign name="rightcircle" size={65} color="black" />
            </TouchableOpacity>
            <SvgXml xml={svgXml} width={414} height={118} style={styles.doodleDotsBottom} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    skip: {
        fontSize: 23,
        color: 'black',
        fontFamily: 'DM Sans',
        fontWeight: '800',
        position: 'absolute',
        right: 20,
        top: 40,
        textShadowColor: '#606060',
        textShadowOffset: {
            width: 0,
            height: 3,
        },
        textShadowRadius: 2,
    },
    png: {
        position: 'absolute',
        height: 199,
        zIndex: 2,
        alignSelf: 'center',
    },
    bigTitleTop: {
        fontSize: 50,
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#FF2E93',
        fontFamily: 'Raleway',
    },
    bigTitleDown: {
        marginTop: -10,
        fontSize: 50,
        color: '#142664',
        fontFamily: 'DM Sans',
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'DM Sans',
    },
    doodleDots: {
        position: 'absolute',
        width: 319.56,
        height: 722.12,
        top: '10%',
        alignSelf: 'center',
    },
    backBtn: {
        position: 'absolute',
        bottom: width / 3,
        alignSelf: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
        shadowOpacity: 0.8, // Opacity of the shadow
        shadowRadius: 8, // Radius of the shadow
        shadowOffset: {
            width: 0, // Horizontal offset of the shadow
            height: 2, // Vertical offset of the shadow
        },
        elevation: 8, // Android shadow elevation
    },
    doodleDotsBottom: {
        position: 'absolute',
        bottom: -1,
        left: -140,
    },
})
export default SecOnboardScreen