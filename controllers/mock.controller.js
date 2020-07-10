const mockModel = require('../model/mock.model');

exports.getMockData = async (req, res, next) => {
    const name = req.params.name;
    try {
        const mock = await mockModel.find({ name: name });
        
        res.status(200).json({
            status:true,
            data: mock
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Internal problem',
            err: err.message
        })
    }
}