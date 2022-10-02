import { Image, Pressable, SafeAreaView, View } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { LandingPageImage } from '../../assets/images';
import { BoldText, GradientText, RegularText } from '../../components/Typography';
import Styles from './styles';

export default function LandingPage({navigation}) {

    const onPressCreateEvent = () => {
        navigation.navigate("CreateEvent")
    }
    
  return (
    <SafeAreaView style={Styles.background}>
        <View style={Styles.subContainer}>
            <View style={Styles.headingView}>
                <BoldText customStyle={Styles.firstHeading}>
                    Imagine if 
                </BoldText>
                <GradientText style={Styles.gradientHeading}>
                    Snapchat
                </GradientText>
                <BoldText customStyle={Styles.bottomHeading}>
                    had events.
                </BoldText>
            </View>
            <View style={Styles.introView}>
                <RegularText style={Styles.introText}>
                    Easily host and share events with your friends across any social media.
                </RegularText>
            </View>
            <View style={Styles.imageContainer}>
                <Image style={Styles.image} source={LandingPageImage} />
            </View>
            <Pressable onPress={onPressCreateEvent} style={Styles.createEventButton}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={["rgba(132, 86, 236, 1)", "rgba(232, 123, 248, 1)"]} style={Styles.linearGradient}>
                    <BoldText customStyle={Styles.buttonText}>
                        🎉 Create my event
                    </BoldText>
                </LinearGradient>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}