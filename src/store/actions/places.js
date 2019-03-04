import { REMOVE_PLACES, SET_PLACES } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./ui";
import { authGetToken } from "./auth";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
      let authToken;
    dispatch(uiStartLoading());
    dispatch(authGetToken())
      .then()
      .catch(() => {
        alert("No valid token found!");
      })
      .then(token => {
          authToken = token;
        return fetch(
          "https://us-central1-mytestproject-1551194381995.cloudfunctions.net/storeImage",
          {
            method: "POST",
            body: JSON.stringify({
              image: image.base64
            }),
              headers: {
                "Authorization": "Bearer " + authToken
              }
          }
        );
      })
        .then(res => res.json())
      .then(parsedRes => {
        const placeData = {
          name: placeName,
          location: location,
          image: parsedRes.imageUrl
        };
        return fetch(
          "https://mytestproject-1551194381995.firebaseio.com/places.json?auth=" + authToken,
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
      })
      .catch(error => {
        console.log(error);
        alert("Something went wrong! Try again");
        dispatch(uiStopLoading());
      });
  };
};

export const getPlaces = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        return fetch(
          "https://mytestproject-1551194381995.firebaseio.com/places.json?auth=" +
            token
        );
      })
      .catch(() => {
        alert("No valid token found!");
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
      })
      .catch(err => {
        alert("Something went wrong :/");
        console.log(err);
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
    dispatch(authGetToken())
      .catch(() => {
        alert("No valid token found!");
      })
      .then(token => {
        dispatch(removePlace(key));
        return fetch(
          "https://mytestproject-1551194381995.firebaseio.com/places/" +
            key +
            ".json?auth=" +
            token,
          {
            method: "DELETE"
          }
        );
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log("Done");
      })
      .catch(err => {
        alert("Something went wrong :/");
        console.log(err);
      });
  };
};

export const removePlace = key => {
  return {
    type: REMOVE_PLACES,
    key: key
  };
};
