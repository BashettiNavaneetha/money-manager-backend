// const router = require("express").Router();
// const Transaction = require("../models/Transaction");


// router.post("/", async (req, res) => {
//   const txn = new Transaction(req.body);
//   await txn.save();
//   res.json(txn);
// });


// router.get("/", async (req, res) => {
//   const data = await Transaction.find().sort({ date: -1 });
//   res.json(data);
// });


// router.put("/:id", async (req, res) => {
//   const txn = await Transaction.findById(req.params.id);
//   const diff = Date.now() - new Date(txn.createdAt).getTime();

//   if (diff > 12 * 60 * 60 * 1000) {
//     return res.status(403).json({ message: "Edit time expired" });
//   }

//   const updated = await Transaction.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );
//   res.json(updated);
// });

// module.exports = router;


const router = require("express").Router();
const Transaction = require("../models/Transaction");

// Add income/expense
router.post("/", async (req, res) => {
  try {
    const txn = new Transaction(req.body);
    await txn.save();
    res.status(201).json(txn);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all transactions
router.get("/", async (req, res) => {
  try {
    const data = await Transaction.find().sort({ date: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Edit only within 12 hours
router.put("/:id", async (req, res) => {
  try {
    const txn = await Transaction.findById(req.params.id);
    if (!txn) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    const diff = Date.now() - new Date(txn.createdAt).getTime();
    if (diff > 12 * 60 * 60 * 1000) {
      return res.status(403).json({ message: "Edit time expired" });
    }

    const updated = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
