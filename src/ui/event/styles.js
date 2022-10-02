import { StyleSheet } from "react-native";
import { RFValue} from 'react-native-responsive-fontsize'

export default StyleSheet.create({
    background: {
        backgroundColor: "rgba(246, 242, 255, 1)",
        flex: 1,  
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        alignSelf: "center"
    },
    createEventButton: {
        marginTop: RFValue(10),
    },
    dateInput: {
        height: RFValue(40),
        marginTop: RFValue(6),
        width: "80%",
        borderWidth: 1,
        padding: 10,
        justifyContent: "center",
    },
    dateAndTimeContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: RFValue(10)
    },
    heading: {
        fontSize: RFValue(16),
        color: "rgba(36, 13, 87, 1)"
    },
    icon: {
        marginLeft: RFValue(10)
    },
    iconContainer: {
        flexDirection: "row"
    },
    input: {
        height: RFValue(40),
        marginTop: RFValue(6),
        borderWidth: 1,
        padding: 10,
    },
    itemContainer: {
        marginVertical: RFValue(10),
    },
    labelText: {
        fontSize: RFValue(12),
        color: "rgba(36, 13, 87, 1)"
    },
    linearGradient: {
        padding: 20,
        borderRadius: 10
    },
    subContainer: {
        paddingHorizontal: 16,
        flex: 1, 
    },
    viewDateContainer: {
        alignItems: "flex-start"
    },
    eventViewComponent: {
        flexDirection: "row", 
        justifyContent: "space-between"
    }
})