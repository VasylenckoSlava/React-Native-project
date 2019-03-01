import { REMOVE_PLACES, SET_PLACES } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./ui";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    dispatch(uiStartLoading());
    fetch(
      "https://us-central1-mytestproject-1551194381995.cloudfunctions.net/storeImage",
      {
        method: "POST",
        body: JSON.stringify({
          image: image.base64
        })
      }
    )
      .catch(error => {
        console.log(error);
        alert("Something went wrong! Try again");
        dispatch(uiStopLoading());
      })
      .then(res => res.json())
      .then(parsedRes => {
        const placeData = {
          name: placeName,
          location: location,
          image: parsedRes.imageUrl
        };
        return fetch(
          "https://mytestproject-1551194381995.firebaseio.com/places.json",
          {
            method: "POST",
            body: JSON.stringify(placeData)
          }
        );
      })
      .catch(error => {
        console.log(error);
        alert("Something went wrong! Try again");
        dispatch(uiStopLoading());
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        dispatch(uiStopLoading());
      });
  };
};

export const getPlaces = () => {
  return dispatch => {
    fetch("https://mytestproject-1551194381995.firebaseio.com/places.json")
      .catch(err => {
        alert("Something went wrong :/");
        console.log(err);
      })
      .then(res => res.json())
      .then(parsedRes => {
        const places = [];
        for (let key in parsedRes) {
          places.push({
            ...parsedRes[key],
            image: {
              uri: parsedRes[key].image
            },
            key: key
          });
        }
        dispatch(setPlaces(places));
      });
  };
};

export const setPlaces = places => {
  return {
    type: SET_PLACES,
    places: places
  };
};

export const deletePlace = key => {
  return dispatch => {
    dispatch(removePlace(key));
    fetch(
      "https://mytestproject-1551194381995.firebaseio.com/places/" + key + ".json", {
        method: "DELETE"})
        .catch(err => {
          alert("Something went wrong :/");
          console.log(err);
        })
        .then(res => res.json())
        .then(parsedRes => {
          console.log("Done");
        })
  };
};

export const removePlace = key => {
  return {
    type: REMOVE_PLACES,
    key: key
  };
};
