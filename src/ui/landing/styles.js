import { StyleSheet } from "react-native";
import { RFValue} from 'react-native-responsive-fontsize'

export default StyleSheet.create({
    background: {
        backgroundColor: "rgba(246, 242, 255, 1)",
        flex: 1,  
    },
    bottomHeading: {
        color: "#240D57",
        fontSize: RFValue(40),
        marginTop: RFValue(-2), 
    },
    buttonText: {
        color: '#fff',
        fontSize: 20
    },
    createEventButton: {
        marginTop: RFValue(10)
    },
    firstHeading: {
        color: "#240D57",
        fontSize: RFValue(40),
        marginBottom: RFValue(-2), 
    },
    gradientHeading:{
        fontFamily: "Helvetica", 
        fontSize: RFValue(40), 
        fontWeight: "700",
        marginVertical: RFValue(-2), 
    },
    headingView: {
        alignItems: "center",
        marginTop: RFValue(20)
    },
    image: {
        height: RFValue(292),
        width: RFValue(165.63)
    },
    imageContainer: {
        marginVertical: 20
    },
    introText: {
        fontSize: RFValue(14),
        textAlign: "center",
    },
    introView: {
        marginVertical: 20,
    },
    linearGradient: {
        padding: 20,
        borderRadius: 10
    },
    subContainer: {
        paddingHorizontal: 16,
        flex: 1, 
        alignItems: "center",
        justifyContent: "center"
    }
})