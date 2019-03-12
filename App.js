import { Navigation } from 'react-native-navigation';
import { Provider } from "react-redux";
import AuthScreen from "./src/screens/Auth/AuthScreen";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import configureStore from "./src/store/configureStore";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import SketchScreen from "./src/screens/SketchScreen/SketchScreen";

const store = configureStore();


// Register screens

Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent("awesome-places.Sketch", () => SketchScreen);
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer, store, Provider);

// Start a App

export default () => Navigation.startSingleScreenApp({
    screen: {
        screen: "awesome-places.AuthScreen",
        title: "Login"
    },
});
