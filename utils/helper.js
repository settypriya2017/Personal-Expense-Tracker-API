// Example of a helper function to validate transaction data
exports.validateTransaction = (data) => {
  const { type, category, amount, date } = data;
  if (!type || !category || !amount || !date) {
    return false;
  }
  return true;
};
