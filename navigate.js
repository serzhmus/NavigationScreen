import React from "react";
import Main from "./components/Main";
import Contacts from "./components/Contacts";

import { createStackNavigatorreateStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

const Stack = createStackNavigator();

export default function (Navigate){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen>
                name="Main"
                component={Main}
                options={{title: 'Главная'}}
            </Stack.Screen>
            <Stack.Screen>
                name="Contacts"
                component={Contacts}
                options={{title: 'Контакты'}}
            </Stack.Screen>
        </Stack.Navigator>

    </NavigationContainer>;
}
