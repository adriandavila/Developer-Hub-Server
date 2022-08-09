// @desc    Get goals
// @route   GET /api/test
// @access  Private
export const getTest = (req, res) => {
  res.status(200).json({ message: "Get test" });
};

// @desc    Set goal
// @route   POST /api/test
// @access  Private
export const setTest = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.status(200).json({ message: `Set test` });
};

// @desc    Get goals
// @route   PUT /api/test
// @access  Private
export const updateTest = (req, res) => {
  res.status(200).json({ message: `Update test ${req.params.id}` });
};

// @desc    Get goals
// @route   DELETE /api/test
// @access  Private
export const deleteTest = (req, res) => {
  res.status(200).json({ message: `Delete test ${req.params.id}` });
};
