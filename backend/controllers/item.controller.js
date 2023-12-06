const itemController = {
  getAllItems: (req, res, next) => {},
  addItem: (req, res, next) => {
    console.log(res.body.name);
  },
};

module.exports = itemController;
