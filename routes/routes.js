const express = require('express');
const Model = require('../model/model');
var cors = require('cors');
const router = express.Router();

var corsOptions = {
  origin: true,
  methods: ['POST', 'GET'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//Post Method
router.post('/post', cors(corsOptions), async (req, res) => {
  const data = new Model({
    namn: req.body.namn,
    kategori: req.body.kategori,
    vetenskapligtNamn: req.body.vetenskapligtNamn,
    vaxtfamilj: req.body.vaxtfamilj,
    vaxtplats: req.body.vaxtplats,
    typAvJord: req.body.typAvJord,
    forodling: req.body.forodling,
    direktsadd: req.body.direktsadd,
    talAntalMinusgrader: req.body.talAntalMinusgrader,
    dagarSaddSkord: req.body.dagarSaddSkord,
    dagarSaddUtplantering: req.body.dagarSaddUtplantering,
    DagarGrotid: req.body.DagarGrotid,
    procentGrobarhet: req.body.procentGrobarhet,
    lagstaGrotemperatur: req.body.lagstaGrotemperatur,
    plantavstand: req.body.plantavstand,
    radavstand: req.body.radavstand,
    sadjup: req.body.sadjup,
    hojd: req.body.hojd,
    talHalvskuggigtLage: req.body.talHalvskuggigtLage,
    vattenbehov: req.body.vattenbehov,
    naringsbehov: req.body.naringsbehov,
    kommerIgenEfterSkord: req.body.kommerIgenEfterSkord,
    img: req.body.img,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get('/getAll', cors(corsOptions), async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
  res.send(req.params.id);
});

//Update by ID Method
router.patch('/update/:id', (req, res) => {
  res.send('Update by ID API');
});

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
  res.send('Delete by ID API');
});

module.exports = router;
