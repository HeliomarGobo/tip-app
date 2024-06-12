import { AppName, Subtitle } from "../components/text";
import Icon from "../assets/images/home-icon.png";
import { Image } from "react-native";
import { PrimaryButton } from "../components/button";
import { LayoutCenter } from "../components/container";
import { useNavigation } from "expo-router";

export default function App() {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate("home");
  };
  return (
    <LayoutCenter
      style={{
        padding: 32,
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <LayoutCenter>
        <AppName />
        <Subtitle text="Calculate the Tip and Split the Bill" />
      </LayoutCenter>
      <Image source={Icon} />
      <PrimaryButton label="Calculate" onPress={goToHome} />
    </LayoutCenter>
  );
}
