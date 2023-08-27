const database = require('../models');

class ItemController {
    static async getItems(req, res){
        try {
            const items = await database.Items.findAll();
            return res.status(200).json(items);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static async getItem(req, res){
        const { id } = req.params;
        try {
            const item  = await database.Items.findOne({ 
                where: { 
                    id: Number(id) 
                } 
            });
            return res.status(200).json(item);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static async createItem(req, res){
        const newItem = req.body;
        try {
            const createdItem = await database.Items.create(newItem);
            return res.status(200).json(createdItem);
        } catch (error) {
            return res.status(500).json(error.message);            
        }
    };

    static async updateItem(req, res){
        const { id } = req.params;
        const newInfo = req.body;
        try {
            await database.Items.update(newInfo, {
                where: {
                    id: Number(id)
                }
            });
            const updatedItem = await database.Items.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(updatedItem);
        } catch (error) {
            return res.status(500).json(error.message);                        
        }
    };

    static async deleteItem(req, res){
        const { id } = req.params;
        try {
            await database.Items.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({message: "Item successfully deleted."});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
}

module.exports = ItemController;