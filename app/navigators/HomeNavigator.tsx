import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import { translate } from "../i18n"
import { SettingsScreen, CommunityScreen } from "../screens"
import { colors, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { WorkoutsScreen } from "app/screens/WorkoutsScreen"

export type HomeTabParamList = {
  Community: undefined
  Workouts: undefined
  Settings: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type TabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<HomeTabParamList>()

export function HomeNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 50 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarLabel: translate("navigator.communityTab"),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="community"
              color={focused ? colors.tint : colors.palette.neutral100}
              size={25}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Workouts"
        component={WorkoutsScreen}
        options={{
          tabBarLabel: translate("navigator.workoutsTab"),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="dumbbell"
              color={focused ? colors.tint : colors.palette.neutral100}
              size={25}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: translate("navigator.settingsTab"),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="settings"
              color={focused ? colors.tint : colors.palette.neutral100}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.palette.stone800,
  borderTopWidth: 1,
}

const $tabBarItem: ViewStyle = {}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}
