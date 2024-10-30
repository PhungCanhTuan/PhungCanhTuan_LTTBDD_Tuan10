// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import API_Screen01 from './view/API_Screen01';
import API_Screen02 from './view/API_Screen02';
import API_Screen03 from './view/API_Screen03';
import API_Screen04 from './view/API_Screen04_Edit';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="API_Screen01" component={API_Screen01} options={{ headerShown: false }} />
          <Stack.Screen name="API_Screen02" component={API_Screen02} options={{ headerShown: false }} />
          <Stack.Screen name="API_Screen03" component={API_Screen03} options={{ headerShown: false }} />
          <Stack.Screen name="API_Screen04" component={API_Screen04} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
