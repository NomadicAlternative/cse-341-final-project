const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  //#swagger.tags=['clothings']
  try {
    const result = await mongodb
      .getDatabase()
      .db()
      .collection("clothings")
      .find();
    res.setHeader("Content-Type", "application/json");

    const clothings = await result.toArray();
    res.status(200).json(clothings);
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(500).json({ message: error.message });
  }
};

const getSingle = async (req, res) => {
  //#swagger.tags=['clothings']
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "The ID provided is not valid" });
    }
    const clothingId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDatabase()
      .db()
      .collection("clothings")
      .find({ _id: clothingId });
    res.setHeader("Content-Type", "application/json");

    const clothings = await result.toArray();

    if (clothings.length > 0) {
      res.status(200).json(clothings[0]);
    } else {
      res.status(404).json({ message: "clothing not found" });
    }
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(500).json({ message: error.message });
  }
};

const createClothing = async (req, res) => {
  //#swagger.tags=['clothings']
  try {
    const clothing = {
      id: req.body.inMarketId,
      name: req.body.name,
      category: req.body.category,
      size: req.body.size,
      color: req.body.color,
      price: req.body.price,
      inStock: req.body.inStock,
      material: req.body.material,
      brand: req.body.brand,
      careInstructions: req.body.careInstructions,
    };
    const response = await mongodb
      .getDatabase()
      .db()
      .collection("clothings")
      .insertOne(clothing);
    if (response.acknowledged) {
      res.status(201).json(response.insertedId);
    } else {
      res.status(500).json({ message: "clothing couldn't be created" });
    }
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(500).json({ message: error.message });
  }
};

const updateClothing = async (req, res) => {
  //#swagger.tags=['clothings']

  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "The ID provided is not valid" });
    }
    const clothingId = new ObjectId(req.params.id);
    const clothing = {
      id: req.body.inMarketId,
      name: req.body.name,
      category: req.body.category,
      size: req.body.size,
      color: req.body.color,
      price: req.body.price,
      inStock: req.body.inStock,
      material: req.body.material,
      brand: req.body.brand,
      careInstructions: req.body.careInstructions,
    };
    const response = await mongodb
      .getDatabase()
      .db()
      .collection("clothings")
      .replaceOne({ _id: clothingId }, clothing);
    if (response.matchedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "clothing not found" });
    }
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(500).json({ message: error.message });
  }
};

const deleteClothing = async (req, res) => {
  //#swagger.tags=['clothings']
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "The ID provided is not valid" });
    }
    const clothingId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDatabase()
      .db()
      .collection("clothings")
      .deleteOne({ _id: clothingId });
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "clothing not found" });
    }
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createClothing,
  updateClothing,
  deleteClothing,
};
