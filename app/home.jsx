import {
  CircleButton,
  PrimaryButton,
  RoundedButton,
} from "../components/button";
import { LayoutCenter, LayoutLeft } from "../components/container";
import { Title } from "../components/text";
import { Card } from "../components/card";
import { useNavigation } from "expo-router";
import { View, FlatList, Text } from "react-native";
import { TextBold } from "@/components/text/styles";
import { useState } from "react";
import { Drawer } from "../components/drawer";

export default function Home() {
  const [selectedTipOption, setSelectedTipOption] = useState();
  const [peopleAtTable, setPeopleAtTable] = useState(1);
  const [valueDrawerVisible, setValueDrawerVisible] = useState(false);
  const toggleValueDrawer = () => {
    setValueDrawerVisible((prevValue) => !prevValue);
  };
  const navigation = useNavigation();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const tipOptions = [5, 10, 15, 20, 25];
  return (
    <View style={{ flex: 1 }}>
      <LayoutCenter
        style={{
          flex: 1,
          justifyContent: "space-between",
          padding: 32,
        }}
      >
        <LayoutCenter
          style={{
            gap: 32,
          }}
        >
          <Title text="Payment" />

          <Card
            title="R$523,00"
            subtitle="Bill Total"
            onPress={toggleValueDrawer}
          />

          <LayoutLeft
            style={{
              gap: 32,
            }}
          >
            <LayoutLeft
              style={{
                gap: 16,
              }}
            >
              <Title text="Tip" />
              <FlatList
                data={tipOptions}
                ItemSeparatorComponent={<View style={{ width: 8 }} />}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) => {
                  const label = `${item}%`;
                  return (
                    <RoundedButton
                      label={label}
                      selected={item === selectedTipOption}
                      onPress={() => {
                        setSelectedTipOption(item);
                      }}
                    />
                  );
                }}
              />
            </LayoutLeft>

            <Title text="Pessoas na Mesa" />
            <View
              style={{
                flexDirection: "row",
                alignSelf: "stretch",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CircleButton
                label="-"
                onPress={() => {
                  if (peopleAtTable > 1) {
                    setPeopleAtTable(peopleAtTable - 1);
                  }
                }}
              />
              <TextBold fontSize={32}>{peopleAtTable}</TextBold>
              <CircleButton
                label="+"
                onPress={() => {
                  setPeopleAtTable(peopleAtTable + 1);
                }}
              />
            </View>
          </LayoutLeft>
        </LayoutCenter>
        <PrimaryButton label="Return" onPress={goBack} />
      </LayoutCenter>
      <Drawer visible={valueDrawerVisible} onBackdropPress={toggleValueDrawer}>
        <Title text="Total da Conta" />
        <PrimaryButton label="Return" onPress={toggleValueDrawer} />
      </Drawer>
    </View>
  );
}
