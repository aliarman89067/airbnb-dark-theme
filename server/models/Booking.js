import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  place: { type: mongoose.Schema.Types.ObjectId, ref: "Place" },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  maxGuests: { type: Number, required: true },
  totalNights: { type: Number, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
});

const BookingModel = mongoose.model("booking", BookingSchema);
export default BookingModel;
