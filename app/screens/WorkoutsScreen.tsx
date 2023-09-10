import React, { FC, useState } from "react"
import { Modal, Pressable, TextStyle, View, ViewStyle } from "react-native"
import { ListItem, Screen, Text } from "../components"
import { TabScreenProps } from "../navigators/HomeNavigator"
import { spacing, colors } from "../theme"
import { useHeader } from "app/utils/useHeader"

export const WorkoutsScreen: FC<TabScreenProps<"Workouts">> = function WorkoutsScreen(_props) {
  const { navigation } = _props
  const [modalVisible, setModalVisible] = useState(false)
  useHeader({
    titleTx: "navigator.workoutsTab",
    rightIcon: "plus",
    rightIconColor: colors.palette.neutral100,
    onRightPress: () => setModalVisible(true),
    backgroundColor: colors.palette.stone900,
    titleStyle: $titleStyle,
    containerStyle: { borderBottomColor: colors.palette.stone700, borderBottomWidth: 1 },
    style: $viewContainer,
  })

  return (
    <Screen preset="scroll" contentContainerStyle={$container}>
      {[...Array(10)].map((_, i) => (
        <ListItem
          key={i}
          height={50}
          text="Hello World"
          bottomSeparator={true}
          style={{ padding: spacing.sm }}
          containerStyle={{ borderBottomColor: colors.palette.stone700 }}
          rightIcon="caretRight"
          rightIconColor={colors.palette.neutral100}
          onPress={() => {
            navigation.navigate("WorkoutDetails")
          }}
        />
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={$centeredView}>
          <View style={$modalView}>
            <Text style={$modalText}>Hello World!</Text>
            <Pressable
              style={[$button, $buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={$textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Screen>
  )
}

const $titleStyle: TextStyle = {
  fontSize: 36,
  lineHeight: 44,
}

const $viewContainer: ViewStyle = {}

const $container: ViewStyle = {}

const $centeredView: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const $modalView: ViewStyle = {
  backgroundColor: colors.background,
  height: "100%",
  width: "100%",
}

const $button: ViewStyle = {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
}

const $buttonClose: ViewStyle = {
  backgroundColor: colors.palette.slate400,
}
const $textStyle: TextStyle = {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
}
const $modalText: TextStyle = {
  marginBottom: 15,
  textAlign: "center",
}
