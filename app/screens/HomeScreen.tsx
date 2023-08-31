import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle, ScrollView } from "react-native"
import { Text } from "../components"
import { colors, spacing } from "../theme"
import { AppStackScreenProps } from "app/navigators/AppNavigator"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  return (
    <View style={$container}>
      <ScrollView style={$scrollContainer}>
        <View>
          <Text size="xl">Scroll Container</Text>
          <Text>This is an example of a scroll container in React Native.</Text>
          <Text>
            You can add any content you want inside the ScrollView component and it will
            automatically become scrollable if it exceeds the height of the container.
          </Text>
          <Text>Try adding more content to see the scroll behavior in action!</Text>
        </View>
      </ScrollView>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

// const $topContainer: ViewStyle = {
//   flexShrink: 1,
//   flexGrow: 1,
//   justifyContent: "center",
//   paddingHorizontal: spacing.lg,
// }

const $scrollContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  marginTop: spacing.lg,
  paddingHorizontal: spacing.lg,
}
