import Composant from '../models/Composant';

class ComposantController{

    static async list(request, response){

        let status = 200;
        let body = {};

        try{
            let composants = await Composant.find();
            console.log(composants);
            body = {composants, 'message': 'List composants'};
        }catch (error){
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async create(request, response) {
        let status = 200;
        let body = {};

        console.log(`req dans composantcontroller  ${request}`);//******************************
        try{
            let composant = await Composant.create({
                type: request.body.type,
                nom: request.body.nom,
                /*prix: request.body.prix,
                caracts: request.body.caracts,
                marque: request.body.marque,*/
            });
            body = {composant, 'message': 'Composant created'};
        }catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async details(request, response) {
        let status = 200;
        let body = {};

        try{
            let id = request.params.id;
            let composant = await Composant.findById(id);
            body = {composant, 'message': 'Details'};

        }catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async delete(request, response) {
        let status = 200;
        let body = {};

        try{
            let id = request.params.id;
            await Composant.deleteOne(id);
            body = {'message': 'Delete'};
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
            let composant = await Composant.findById(id);
            await composant.update(request.body);
            body = {composant, 'message': 'Details'};
        }catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default ComposantController;
