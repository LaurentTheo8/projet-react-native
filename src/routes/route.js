import {Router} from 'express';

import PurifierController from "../controllers/purifier.controller";
import ComposantController from "../controllers/composants.controller";
var path = require('path');
const router = Router();

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '../../../index.html'));
});

router.get('/purifiers', PurifierController.list);
router.post('/purifiers', PurifierController.create);
router.get('/purifiers/:id', PurifierController.details);
router.put('/purifiers/:id', PurifierController.update);
router.delete('/purifiers/:id', PurifierController.delete);

router.get('/composants', ComposantController.list);
router.post('/composants', ComposantController.create);
router.get('/composants/:id', ComposantController.details);
router.delete('/composants/:id', ComposantController.delete);
router.put('/composants/:id', ComposantController.update);

export default router;
