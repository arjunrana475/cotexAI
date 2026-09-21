const getCurrentUser = async (req, res, next) => {
  try {
      return res.status(200).json(req.user);
  } catch (e) {
    return res.status(500).json({ message: `getCurrentUser error : ${e}` });
  }
};
export default getCurrentUser;
