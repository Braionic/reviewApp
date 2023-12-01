import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import RevewDetails from '../screens/ReviewDetails';
import { Button } from 'react-native';
import { Avatar } from 'react-native-elements';

const Stack = createNativeStackNavigator()

export default function HomeStack({navigation}){
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerLeft: ()=> <Avatar rounded size={'small'} source={require('../assets/favicon.png')} onPress={()=> navigation.openDrawer()} />}}  name='Home' component={Home} />
        <Stack.Screen options={({ route }) => ({ title: `${route.params.name}'s Review` })} name='Reviewdetails' component={RevewDetails} />
       
      </Stack.Navigator>
    )
}
