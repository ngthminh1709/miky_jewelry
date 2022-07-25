const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RefreshTokenSchema = new Schema(
  {
    userId: { type: String, required: true },
    refreshToken: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.RefreshToken || mongoose.model('RefreshToken', RefreshSchema);

