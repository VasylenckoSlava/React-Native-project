const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
const fs = require("fs");
const UUID = require("uuid-v4");

const projectId = "mytestproject-1551194381995";
const keyFilename = "awesome-places.json";

const { Storage } = require("@google-cloud/storage");

const gcs = new Storage({
  projectId: projectId,
  keyFilename: keyFilename
});

admin.initializeApp({
  credential: admin.credential.cert(require("./awesome-places"))
});

exports.storeImage = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    if (
      !request.headers.authorization ||
      !request.headers.authorization.startsWith("Bearer ")
    ) {
      console.log("No token present!");
      response.status(403).json({ error: "Unauthorized!" });
      return;
    }
    let idToken;
    idToken = request.headers.authorization.split("Bearer ")[1];
    admin
      .auth()
      .verifyIdToken(idToken)
      .then(decodedToken => {
        const body = JSON.parse(request.body);
        fs.writeFileSync(
          "/tmp/uploaded-image.jpg",
          body.image,
          "base64",
          err => {
            console.log(err);
            return response.status(500).json({ error: err });
          }
        );
        const bucket = gcs.bucket("mytestproject-1551194381995.appspot.com");
        const uuid = UUID();

        bucket.upload(
          "/tmp/uploaded-image.jpg",
          {
            uploadType: "media",
            destination: "/places/" + uuid + ".jpg",
            metadata: {
              metadata: {
                contentType: "image/jpeg",
                firebaseStorageDownloadTokens: uuid
              }
            }
          },
          (err, file) => {
            if (!err) {
              return response.status(201).json({
                imageUrl:
                  "https://firebasestorage.googleapis.com/v0/b/" +
                  bucket.name +
                  "/o/" +
                  encodeURIComponent(file.name) +
                  "?alt=media&token=" +
                  uuid,
                imagePath: "/places/" + uuid + ".jpg"
              });
            } else {
              console.log(err);
              return response.status(500).json({ error: err });
            }
          }
        );
      })
      .catch(error => {
        console.log("Token is invalid!");
        response.status(403).json({ error: "Unauthorized" });
      });
  });
});

exports.deleteImage = functions.database
  .ref("/places/{placesId}")
  .onDelete(snapshot => {
    const placeData = snapshot.val();
    const imagePath = placeData.imagePath;

    const bucket = gcs.bucket("mytestproject-1551194381995.appspot.com");
    return bucket.file(imagePath).delete();
  });
