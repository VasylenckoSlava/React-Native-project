import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import AuthScreen from "./src/screens/Auth/AuthScreen";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import { store } from "./src/store/configureStore";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import SketchScreen from "./src/screens/SketchScreen/SketchScreen";
import InterestingPlaceScreen from "./src/screens/InterestingPlaceScreen/InterestingPlaceScreen";
import InterestingPlacedetailInfo from "./src/screens/InterestingPlaceDetailInfo/InterestingPlacedetailInfo";

// Register screens

Navigation.registerComponent(
  "awesome-places.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent("awesome-places.Sketch", () => SketchScreen);
Navigation.registerComponent("awesome-places.InterestingPlaceScreen", () => InterestingPlaceScreen);
Navigation.registerComponent("awesome-places.InterestingPlaceDetailInfo", () => InterestingPlacedetailInfo);
Navigation.registerComponent(
  "awesome-places.SideDrawer",
  () => SideDrawer,
  store,
  Provider
);

// Start a App

export default () =>
  Navigation.startSingleScreenApp({
    screen: {
      screen: "awesome-places.AuthScreen",
      title: "Login"
    }
  });
