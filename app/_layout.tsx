import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import { Container } from '../components/container'
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
  <Container>
    <SafeAreaView />
    <StatusBar style="auto" />
    <Slot />
  </Container>
  );
}
