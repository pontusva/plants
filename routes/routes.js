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
    info: [
      {
        kategori: req.body.info.kategori,
        vetensakpligtNamn: req.body.info.vetensakpligtNamn,
        vaxtfamilj: req.body.info.infovaxtfamilj,
        typ: req.body.info.typ,
        hojd: req.body.info.hojd,
      },
    ],
    behov: [
      {
        vaxtplats: req.body.vaxtplats,
        lage: req.body.lage,
        jordtyp: req.body.jordtyp,
        vattenbehov: req.body.vattenbehov,
        naringsbehov: req.body.naringsbehov,
        frosttalig: req.body.frosttalig,
      },
    ],
    odla: [
      {
        direktsadd: req.body.direktsadd,
        forodling: req.body.forodling,
        satid: req.body.satid,
        grotid: req.body.grotid,
        grotemperatur: req.body.grotemperatur,
        saddTillUtplantering: req.body.saddTillUtplantering,
        plantavstand: req.body.plantavstand,
        radavstand: req.body.radavstand,
        sadjup: req.body.sadjup,
        dagarFranSaddTillSkord: req.body.dagarFranSaddTillSkord,
        blomtid: req.body.blomtid,
      },
    ],
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
    const data = await Model.find().sort({ namn: 1 });
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
