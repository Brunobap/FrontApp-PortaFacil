import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: {display: "none"}}}>
      {/* Telas individuais para fluxo de login */}
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="login"/>
    </Tabs>
  );
}
