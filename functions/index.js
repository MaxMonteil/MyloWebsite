const functions = require("firebase-functions");

const WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const transformWorkout = (req, res) => {
  try {
    const workout = req.body.data;

    res.send({
      result: {
        objectID: workout.objectID, // must have this
        name: workout["data.name"],
        description: workout["data.description"],
        exercises: Object.keys(workout["data.exercises"]),
        week: WEEK.filter((day) => workout["data.week"][day].length > 0),
      },
    });
  } catch (e) {
    functions.logger.log("There was an error", {message: e.message});
    res.status(500).end();
  }
};

exports.transformWorkoutForSearch = functions.https.onRequest((req, res) =>
  transformWorkout(req, res)
);

exports.transformWorkoutForSearchProd = functions
    .region("europe-west1")
    .https.onRequest((req, res) => transformWorkout(req, res));
