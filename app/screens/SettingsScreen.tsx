import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Screen } from "../components"
import { TabScreenProps } from "app/navigators/HomeNavigator"
import { useStores } from "../models"
import { spacing, colors } from "../theme"

export const SettingsScreen: FC<TabScreenProps<"Settings">> = function SettingsScreen(_props) {
  const {
    authenticationStore: { logout },
  } = useStores()

  return (
    <Screen
      preset="scroll"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <View style={$buttonContainer}>
        <Button style={$button} textStyle={$buttonText} tx="common.logOut" onPress={logout} />
      </View>
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $button: ViewStyle = {
  marginBottom: spacing.xs,
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral900,
}

const $buttonContainer: ViewStyle = {
  marginBottom: spacing.md,
}
