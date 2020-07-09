import Purifier from "../models/Purifier";


class PurifierController{


    static async list(request, response){

        let status = 200;
        let body = {};

        try{
            let purifiers = await Purifier.find();
            body = purifiers;

        }catch (error){
            status = 500;
            body = {'message': error.message};
        }
        console.log('list api');
        return response.status(status).json(body);
    }
    static async create(req, res) {
        let status = 200;
        let body = {};

        try{
            let purifier = await Purifier.create({
                content: req.body.content,
                config_id: req.body.config_id,
                user_id: req.body.config_id
            });

            body = {purifier, 'message': 'Purifier created'};
        }catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    static async details(req, res) {
        let status = 200;
        let body = {};

        try{
            let purifier = await Purifier.findById(req.params.id).populate('purifier_id');
            body = {purifier, 'message': 'Purifier details'};

        }catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    static async delete(request, response) {
        let status = 200;
        let body = {};

        try{
            let id = request.params.id;
            await Purifier.deleteOne(id);
            body = {'message': 'Purifier'};
        }catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async update(request, response) {
        let status = 200;
        let body = {};

        try{
            let id = request.params.id;
            let purifier = await Purifier.findById(id);
            await purifier.update(request.body);
            body = {purifier, 'message': 'Details'};
        }catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default PurifierController;
