import React, { useState } from 'react';
import { Button, SafeAreaView, StatusBar, Platform, ImageBackground, TextInput, View, Pressable, Image } from 'react-native';
import { BoldText, RegularText } from '../../components/Typography';
import Styles from './styles';
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome, EvilIcons } from '@expo/vector-icons';
import LinearGradient from "react-native-linear-gradient";
import { EventImage, Location, Calendar, ChevronRight } from '../../assets/images';

export default function ViewEvent({navigation}) {

    const [eventName, setEventName] = React.useState("");
    const [hostName, setHostName] = React.useState("");
    const [location, setLocation] = React.useState("");

    const [number, onChangeNumber] = React.useState(null);

    const [endDate, setEndDate] = useState(new Date(1598051730000));
    const [startDate, setStartDate] = useState(new Date(1598051730000));
    const [startDatemode, setStartDateMode] = useState('date');
    const [endDateMode, setEndDateMode] = useState('date');
    const [startDateshow, setStartDateShow] = useState(false);
    const [endDateshow, setEndDateShow] = useState(false);

  
 
  

  return (
    <>
       <ImageBackground
        resizeMode="cover"
        source={EventImage}
        style={{ flex: 0.8, justifyContent: "center" }}
      >
        <View style={{backgroundColor: "transparent", height:100}}>
          <StatusBar
            animated
            backgroundColor="transparent"
            barStyle="light-content"
            translucent
          />
        </View>
      </ImageBackground>
      
      <View style={Styles.background}>
        <View style={Styles.subContainer}>
          <View>
            <BoldText>Birthday Bash</BoldText>
            <RegularText>Hosted by</RegularText>
          </View>
          <View>
            <View style={Styles.eventViewComponent}>
              <Image source={Calendar} />
              <RegularText>18th August, 6:00PM to 19th August, 1:00PM UTC +10</RegularText>
              <Image source={ChevronRight} />
            </View>
            <View style={Styles.eventViewComponent}>
              <Image source={Location} />
              <RegularText>Street name</RegularText>
              <RegularText>Suburb, State, Post code</RegularText>
              <Image source={ChevronRight} />
            </View>
          </View>
        </View>
      </View>
    </>
   
  )
}