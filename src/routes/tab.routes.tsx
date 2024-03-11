import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feed, New } from '../screens';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather color={color} size={size} name="home" />
          ),
          tabBarLabel: 'Feed',
        }}
      />
      <Tab.Screen
        name="new"
        component={New}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather color={color} size={size} name="navigation" />
          ),
          tabBarLabel: 'New',
        }}
      />
    </Tab.Navigator>
  );
}
