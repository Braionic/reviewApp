import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import RevewDetails from '../screens/ReviewDetails';

const Stack = createNativeStackNavigator()

export default function HomeStack(){
    return (
      <Stack.Navigator>
        <Stack.Screen  name='Home' component={Home} />
        <Stack.Screen options={({ route }) => ({ title: `${route.params.name}'s Review` })} name='Reviewdetails' component={RevewDetails} />
       
      </Stack.Navigator>
    )
}
