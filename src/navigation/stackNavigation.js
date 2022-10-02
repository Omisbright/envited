import { createStackNavigator } from "@react-navigation/stack";
import {
    ViewEvent, 
    CreateEvent
} from "../ui/event";
import LandingPage from "../ui/landing/landingPage";

const Stack = createStackNavigator();

const StackNavigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                header: () => null,
            }}
        >
            <Stack.Screen name="ViewEvent" component={ViewEvent} />
            <Stack.Screen name="CreateEvent" component={CreateEvent} />
            <Stack.Screen name="LandingPage" component={LandingPage} />
        </Stack.Navigator>
    )
};

export default StackNavigation;