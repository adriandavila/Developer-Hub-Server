import mongoose from "mongoose";

const NotificationSchema = mongoose.Schema(
  {
    senderID: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please add sender ID"],
      ref: "User",
    },
    recipientID: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please add recipient ID"],
      ref: "User",
    },
    activityType: {
      type: String,
      enum: ["timesheet_submitted", "timesheet_received", "role_updated"],
      required: [true, "Please add activity type"],
    },
    payload: {
      type: mongoose.Schema.Types.Mixed,
    },
    expiry: {
      type: Date,
      default: Date.now() + 6.048e8 * 2, // Default 2 week expiry date
    },
    status: {
      type: String,
      enum: ["read", "unread"],
      default: "unread",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Notification", NotificationSchema);
