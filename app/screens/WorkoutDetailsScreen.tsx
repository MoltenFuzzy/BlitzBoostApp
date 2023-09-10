import React, { FC } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { ListItem, Screen, Text } from "../components"
import { AppStackScreenProps } from "../navigators/AppNavigator"
import { spacing, colors } from "../theme"
import { useHeader } from "app/utils/useHeader"

export const WorkoutDetailsScreen: FC<AppStackScreenProps<"WorkoutDetails">> =
  function WorkoutDetailsScreen(_props) {
    useHeader({
      titleTx: "navigator.workoutDetailsTab",
      leftIcon: "back",
      leftIconColor: colors.palette.neutral100,
      onLeftPress: () => _props.navigation.goBack(),
      backgroundColor: colors.palette.stone900,
      titleStyle: $titleStyle,
      containerStyle: { borderBottomColor: colors.palette.stone700, borderBottomWidth: 1 },
      style: $viewContainer,
    })

    return (
      <Screen preset="scroll" contentContainerStyle={$container}>
        <Text>Workout Details</Text>
      </Screen>
    )
  }

const $titleStyle: TextStyle = {
  fontSize: 36,
  lineHeight: 44,
}

const $viewContainer: ViewStyle = {}

const $container: ViewStyle = {}
