import * as mongoose from 'mongoose';

const AuthSchema = new mongoose.Schema(
  {
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    morph: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: 'morphModel',
    },
    // morphModel: {
    //   type: String,
    //   required: true,
    //   enum: 'User',
    // },
    userAgent: String,
    ip: String,
    deviceToken: String,
    deviceType: { type: String, default: null },
    accessExpiredAt: Date,
    refreshExpiredAt: Date,
  },
  { timestamps: true },
);

export { AuthSchema };