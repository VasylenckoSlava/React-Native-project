import { Navigation } from "react-native-navigation";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === "android" ? "md-map" : "ios-disc", 30),
    Icon.getImageSource(Platform.OS === "android" ? "md-share-alt" : "ios-share", 30),
    Icon.getImageSource(Platform.OS === "android" ? "md-menu" : "ios-menu", 30),
    Icon.getImageSource(Platform.OS === "android" ? "md-brush" : "ios-brush", 30),
    Icon.getImageSource(Platform.OS === "android" ? "md-color-wand" : "ios-color-wand", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Find Place",
          title: "Find Place",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label: "Share Place",
          title: "Share Place",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
          {
              screen: "awesome-places.Sketch",
              label: "Sketch",
              title: "Sketch",
              icon: sources[3],
              navigatorButtons: {
                  leftButtons: [
                      {
                          icon: sources[2],
                          title: "Menu",
                          id: "sideDrawerToggle"
                      }
                  ]
              }
          },
          {
              screen: "awesome-places.InterestingPlaceScreen",
              label: "Push",
              title: "Push",
              icon: sources[4],
              navigatorButtons: {
                  leftButtons: [
                      {
                          icon: sources[2],
                          title: "Menu",
                          id: "sideDrawerToggle"
                      }
                  ]
              }
          }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: "orange"
      },
      drawer: {
        left: {
          screen: "awesome-places.SideDrawer"
        }
      },
      appStyle: {
        tabBarSelectedButtonColor: "orange"
      }
    });
  });
};

export default startTabs;
