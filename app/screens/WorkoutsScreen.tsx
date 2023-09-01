import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { Screen, Text } from "../components"
import { TabScreenProps } from "../navigators/HomeNavigator"
import { spacing } from "../theme"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const WorkoutsScreen: FC<TabScreenProps<"Workouts">> = function WorkoutsScreen(_props) {
  // Queries
  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => axios.get("https://localhost:5000/user").then((res) => res.data),
  })

  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <View>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}
