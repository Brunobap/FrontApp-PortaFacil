import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import NotFoundScreen from '../+not-found';

export default function TabLayout() {

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="login" />
      <Tabs.Screen name="user" />
      <Tabs.Screen name="roomlist" />

    </Tabs>
  );
}
