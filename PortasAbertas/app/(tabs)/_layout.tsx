import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{tabBarItemStyle: {display: 'none'}, tabBarStyle: {display: "none"}}}/>
      <Tabs.Screen name="login" options={{tabBarItemStyle: {display: 'none'}, tabBarStyle: {display: "none"}}}/>
      <Tabs.Screen name="user" options={{title: "Portas", tabBarHideOnKeyboard: true}}/>
    </Tabs>
  );
}
