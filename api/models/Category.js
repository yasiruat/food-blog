const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            reuqired: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);