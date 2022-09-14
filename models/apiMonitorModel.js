import mongoose from "mongoose";

const ApiMonitorSchema = mongoose.Schema({
  datetime: {
    type: Date,
    required: [true, "Please add a datetime"],
  },
  route: {
    type: String,
    required: [true, "Please add a route"],
  },
  method: {
    type: String,
    required: [true, "Please specify a method"],
  },
  http: {
    type: Number,
    required: [true, "Please specify the HTTP response code"],
  },
  error: {
    type: String,
    required: [true, "Please add the error"],
  },
  status: {
    type: String,
    enum: ["uncategorized", "resolved"],
    default: "uncategorized",
  },
  fullErrorMessage: {
    type: String,
  },
  stackTrace: {
    type: String,
  },
  payload: {
    type: String,
  },
  headers: {
    type: String,
  },
});

export default mongoose.model("User", ApiMonitorSchema);
