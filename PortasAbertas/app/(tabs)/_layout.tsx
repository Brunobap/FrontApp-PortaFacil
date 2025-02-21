import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* Telas a mostra no menu principal do aplicativo */}
      <Tabs.Screen name="portas"/>
      
    </Tabs>
  );
}
