import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Text } from "../components"
import { TabScreenProps } from "app/navigators/HomeNavigator"
import { useStores } from "../models"
import { spacing } from "../theme"

export const SettingsScreen: FC<TabScreenProps<"Settings">> = function DemoDebugScreen(_props) {
  const {
    authenticationStore: { logout },
  } = useStores()

  return (
    <View style={$container}>
      <Text style={$title}>Settings</Text>
      <View style={$buttonContainer}>
        <Button style={$button} tx="common.logOut" onPress={logout} />
      </View>
    </View>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingBottom: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $title: TextStyle = {
  marginBottom: spacing.xxl,
}

const $button: ViewStyle = {
  marginBottom: spacing.xs,
}

const $buttonContainer: ViewStyle = {
  marginBottom: spacing.md,
}
