import MenuItem from "../models/menuItem.model.js";

// Create
export const createMenuItem = async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    const saved = await menuItem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Read All
export const getMenuItems = async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
};

// Read One
export const getMenuItem = async (req, res) => {
  const item = await MenuItem.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
};

// Update
export const updateMenuItem = async (req, res) => {
  const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Delete
export const deleteMenuItem = async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
