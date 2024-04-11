import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { AntDesign } from '@expo/vector-icons';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>['name'];
  color: string;
}) {
  return <AntDesign size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
      
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarActiveTintColor: "#2E8BC0", // Active title and icon color
        tabBarInactiveTintColor: "#000000", // Inactive title and icon color
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" color={focused ? "#2E8BC0" : "#000000"} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={
                      pressed ? "gray" : Colors[colorScheme ?? "light"].text
                    } // Adjusted for pressed state
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="user" color={focused ? "#2E8BC0" : "#000000"} />
          ),
        }}
      />
    </Tabs>
  );
}
