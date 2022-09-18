const {Brand} = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res) {
        const {name} = req.body;
        const brand = await Brand.create({name});        
        return res.json(brand);
    }

    async getAll(req, res) {
        const brands = await Brand.findAll();
        return res.json(brands);
    }

    async delete(req, res) {
        // const {id} = req.params;
        // await Brand.destroy({where: {id}});
        const {name} = req.params;
        await Brand.destroy({where: {name}});
        return res.json('Brand was deleted');
    }

    async update(req, res) {
        const {id} = req.params;
        const {name} = req.body;
        await Brand.update({name}, {where: {id}});
        return res.json('Brand was updated');
    }
};

module.exports = new BrandController();