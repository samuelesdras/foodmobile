import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

import { AuthProfider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProfider>
        <StatusBar
          backgroundColor="#1d1d2e"
          barStyle="light-content"
          translucent={false}
        />
        <Routes />
      </AuthProfider>
    </NavigationContainer>
  );
}
