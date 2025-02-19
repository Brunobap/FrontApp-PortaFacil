import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* Telas individuais para fluxo de login */}
      <Tabs.Screen name="index" options={{tabBarItemStyle: {display: 'none'}, tabBarStyle: {display: "none"}}}/>
      <Tabs.Screen name="login" options={{tabBarItemStyle: {display: 'none'}, tabBarStyle: {display: "none"}}}/>

      {/* Telas a mostra no meunu principal do aplicativo */}
      <Tabs.Screen name="portas" />

      {/* Telas acessíveis por botões específicos */}
      <Tabs.Screen name="adm_room" />
      <Tabs.Screen name="edit_user" />
      <Tabs.Screen name="add_user" />
    </Tabs>
  );
}
