const { Router } = require("express");
const controller = require('./controller');

const router = Router();

router.get('/', controller.getSteelers);
router.get('/:number', controller.getSteelersByNumber);
router.post('/', controller.addSteelers);
router.put('/:number', controller.updateSteeler);
router.delete('/:number', controller.deleteSteeler);

/*
router.get('/', (req,res) => {
    res.send("using api route");
});
*/

module.exports = router;
