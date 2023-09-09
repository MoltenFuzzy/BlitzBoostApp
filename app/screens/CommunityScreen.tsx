import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { Screen, Text } from "../components"
import { TabScreenProps } from "../navigators/HomeNavigator"
import { spacing } from "../theme"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface User {
  id: string
  name: string
  email: string
  password: string
  created_at: string
  updated_at: string
}

export const CommunityScreen: FC<TabScreenProps<"Community">> = function CommunityScreen(_props) {
  // Queries
  const { data } = useQuery<User[]>({
    queryKey: ["repoData"],
    queryFn: () => axios.get(`${process.env.BASE_URL}/user`).then((res) => res.data),
  })

  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <View>
        {data?.map((item) => (
          <>
            <Text key={item.id}>{item?.id}</Text>
            <Text key={item.id}>{item?.email}</Text>
            <Text key={item.id}>{item?.name}</Text>
          </>
        ))}
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}
