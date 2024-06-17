import React from "react";

import { Tabs } from "expo-router";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { FONT } from "@/constants/Fonts";
import CustomeTabBar from "@/components/(tabs)/CustomTabBar";
import { useTheme } from "@/providers/theme-color-provider";

export default function TabLayout() {
  const {colors} = useTheme()

  return (
    <>
      <Tabs
        tabBar={(props) => <CustomeTabBar {...props} />}
        screenOptions={{
          headerStyle:{
            backgroundColor:colors.secondary_bg,
          },
          headerTitleStyle: {
            color: colors.primary_text,
            fontFamily:FONT.SemiBold
          },
          tabBarActiveTintColor: colors.active_icon_color,
          tabBarInactiveTintColor:colors.icon_color_sc,
          
          headerShown: useClientOnlyValue(false, true),
          tabBarStyle: {
            height: 60,
            paddingBottom: 10,
          },
          tabBarLabelStyle: {
            fontFamily: FONT.Bold,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />
        

      </Tabs>
    </>
  );
}
