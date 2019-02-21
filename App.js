import { Navigation } from 'react-native-navigation';
import AuthScreen from "./src/screens/Auth/AuthScreen";
import FindPlaceScreen from "./src/screens/FindPlaceTab/FindPlaceTab";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";

// Register screens

Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen);

// Start a App

Navigation.startSingleScreenApp({
    screen: {
        screen: "awesome-places.AuthScreen",
        title: "Login"
    },
});
