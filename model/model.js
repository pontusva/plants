const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
  {
    namn: {
      required: true,
      type: String,
      unique: true,
    },
    info: [
      {
        kategori: {
          required: true,
          type: String,
        },
        vetenskapligtnamn: {
          required: true,
          type: String,
        },
        vaxtfamilj: {
          required: true,
          type: String,
        },
        typ: {
          required: true,
          type: String,
        },
        hojd: {
          required: true,
          type: String,
        },
      },
    ],
    behov: [
      {
        vaxtplats: {
          required: true,
          type: String,
        },
        lage: {
          required: true,
          type: String,
        },
        jordtyp: {
          required: true,
          type: String,
        },
        vattenbehov: {
          required: true,
          type: String,
        },
        naringsbehov: {
          required: true,
          type: String,
        },
        frosttalig: {
          required: true,
          type: String,
        },
      },
    ],
    odla: [
      {
        direktsadd: {
          required: true,
          type: String,
        },
        forodling: {
          required: true,
          type: String,
        },
        satid: {
          required: true,
          type: String,
        },
        grotid: {
          required: true,
          type: String,
        },
        grotemperatur: {
          required: true,
          type: String,
        },
        saddTillUtplantering: {
          required: true,
          type: String,
        },
        plantavstand: {
          required: true,
          type: String,
        },
        radavstand: {
          required: true,
          type: String,
        },
        sadjup: {
          required: true,
          type: String,
        },
        dagarFranSaddTillSkord: {
          required: true,
          type: String,
        },
        blomtid: {
          required: true,
          type: String,
        },
      },
    ],
  },
  { collection: 'plants' }
);

module.exports = mongoose.model('Data', dataSchema);
