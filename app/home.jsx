import { PrimaryButton, RoundedButton } from "../components/button";
import { LayoutCenter, LayoutLeft } from "../components/container";
import { Title } from "../components/text";
import { Card } from "../components/card";
import { useNavigation } from "expo-router";
import { View } from "react-native";


export default function Home() {
  const navigation = useNavigation();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <LayoutCenter
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Title text="Payment" />

      <Card title="R$523,00" subtitle="Bill Total" />

      <LayoutLeft>
        <Title text="Tip" />

        <View>
        <RoundedButton label="5%" />
        <RoundedButton label="10%" />
        <RoundedButton label="15%" />
        </View>
      </LayoutLeft>

      <PrimaryButton label="Calculate" onPress={goBack} />
    </LayoutCenter>
  );
}
