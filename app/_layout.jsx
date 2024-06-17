import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import { Container } from "../components/container";
import { StatusBar } from "expo-status-bar";
import { ValueProvider } from "../providers/valueProvider";

export default function RootLayout() {
  return (
    <ValueProvider>
      <Container>
        <SafeAreaView />
        <StatusBar style="auto" />
        <Slot />
      </Container>
    </ValueProvider>
  );
}
