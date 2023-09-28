const testController = (req, res) => {
    res.status(200).send({
        message: "test route is running",
        success: true,
    });
};

module.exports = { testController }