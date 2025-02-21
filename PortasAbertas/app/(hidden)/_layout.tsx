import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: {display: "none"}}}>
      {/* Telas a mostra a partir do menu principal do aplicativo */}
      <Tabs.Screen name="add_user"/>
      <Tabs.Screen name="adm_door"/>
      <Tabs.Screen name="adm_room"/>
      <Tabs.Screen name="edit_user"/>
    </Tabs>
  );
}
