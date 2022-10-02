import React, { useState } from 'react';
import { Button, SafeAreaView, Platform, TextInput, View, Pressable } from 'react-native';
import { BoldText, RegularText } from '../../components/Typography';
import Styles from './styles';
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome, EvilIcons } from '@expo/vector-icons';
import LinearGradient from "react-native-linear-gradient";

export default function CreateEvent({navigation}) {

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
  
    const onChangeStartDate = (event, selectedDate) => {
      const currentDate = selectedDate;
      //setShow(Platform.OS === "ios");
      setStartDate(currentDate);
    };

    const onChangeEndDate = (event, selectedDate) => {
      const currentDate = selectedDate;
      //setShow(Platform.OS === "ios");
      setEndDate(currentDate);
    };
  
    const startDateShowMode = (currentMode) => {
      setStartDateShow(true);
      setStartDateMode(currentMode);
    };

    const endDateShowMode = (currentMode) => {
      setEndDateShow(true);
      setEndDateMode(currentMode);
    };
  
    const showStartDatepicker = () => {
      startDateShowMode('date');
    };
  
    const showStartTimepicker = () => {
      startDateShowMode('time');
    };

    const showEndDatepicker = () => {
      endDateShowMode('date');
    };
  
    const showEndTimepicker = () => {
      endDateShowMode('time');
    };

    const onPressCreateEvent = () => {
      navigation.navigate("ViewEvent")
  }
  

  return (
    <SafeAreaView style={Styles.background}>
      <View style={Styles.subContainer}>
          <View>
            <BoldText customStyle={Styles.heading}>Create Event</BoldText>
          </View>
          <View style={Styles.itemContainer}>
            <RegularText customStyle={Styles.labelText}>Event name</RegularText>
            <View>
              <TextInput
                style={Styles.input}
                onChangeText={setEventName}
                value={eventName}
                placeholder="Jame's Birthday"
                placeholderTextColor="rgba(100,100,100,0.5)"
              />
            </View>
          </View>
          <View style={Styles.itemContainer}>
            <RegularText customStyle={Styles.labelText}>Host name</RegularText>
            <View>
              <TextInput
                style={Styles.input}
                onChangeText={setHostName}
                value={hostName}
                placeholder="Michael J"
                placeholderTextColor="rgba(100,100,100,0.5)"
              />
            </View>
          </View>
          <View style={Styles.itemContainer}>
            <RegularText customStyle={Styles.labelText}>Start date and time</RegularText>
            <View style={Styles.dateAndTimeContainer}>
              <View style={Styles.dateInput}>
                <RegularText>{startDate.toLocaleString()}</RegularText>
              </View>
              <View style={Styles.iconContainer}>
                <Pressable style={Styles.icon} onPress={showStartDatepicker}>
                  <FontAwesome name="calendar" size={24} color="black" />
                </Pressable>
                <Pressable style={Styles.icon} onPress={showStartTimepicker}>
                  <FontAwesome name="clock-o" size={24} color="black" />
                </Pressable>
              </View>
            </View>
            {startDateshow && (
              <DateTimePicker
                testID="dateTimePicker"
                value={startDate}
                mode={startDatemode}
                is24Hour={true}
                onChange={onChangeStartDate}
              />
            )}
        </View>
          <View style={Styles.itemContainer}>
            <RegularText customStyle={Styles.labelText}>Start date and time</RegularText>
            <View style={Styles.dateAndTimeContainer}>
              <View style={Styles.dateInput}>
                <RegularText>{endDate.toLocaleString()}</RegularText>
              </View>
              <View style={Styles.iconContainer}>
                <Pressable style={Styles.icon} onPress={showEndDatepicker}>
                  <FontAwesome name="calendar" size={24} color="black" />
                </Pressable>
                <Pressable style={Styles.icon} onPress={showEndTimepicker}>
                  <FontAwesome name="clock-o" size={24} color="black" />
                </Pressable>
              </View>
            </View>
            {endDateshow && (
              <DateTimePicker
                testID="dateTimePicker"
                value={endDate}
                mode={endDateMode}
                is24Hour={true}
                onChange={onChangeEndDate}
              />
            )}
          </View>
          <View style={Styles.itemContainer}>
            <RegularText customStyle={Styles.labelText}>Location</RegularText>
            <View>
              <TextInput
                style={Styles.input}
                onChangeText={setLocation}
                value={location}
                placeholder="Bobby's room"
                placeholderTextColor="rgba(100,100,100,0.5)"
              />
            </View>
          </View>
          <View>
            <RegularText customStyle={Styles.heading}>Event photo</RegularText>
          </View>
          <Pressable onPress={onPressCreateEvent} style={Styles.createEventButton}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={["rgba(132, 86, 236, 1)", "rgba(232, 123, 248, 1)"]} style={Styles.linearGradient}>
                  <BoldText customStyle={Styles.buttonText}>
                      Next
                  </BoldText>
              </LinearGradient>
          </Pressable>
      </View>
    </SafeAreaView>
  )
}