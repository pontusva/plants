const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
  {
    namn: {
      required: true,
      type: String,
      unique: true,
    },
    kategori: {
      required: true,
      type: String,
    },
    vetenskapligtNamn: {
      required: true,
      type: String,
    },
    vaxtfamilj: {
      required: true,
      type: String,
    },
    vaxtplats: {
      required: true,
      type: String,
    },
    typAvJord: {
      required: true,
      type: String,
    },
    forodling: {
      required: true,
      type: String,
    },
    direktsadd: {
      required: true,
      type: String,
    },
    dagarSaddSkord: {
      required: true,
      type: String,
    },
    dagarSaddUtplantering: {
      required: true,
      type: String,
    },
    DagarGrotid: {
      required: true,
      type: String,
    },
    procentGrobarhet: {
      required: true,
      type: String,
    },
    lagstaGrotemperatur: {
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
    hojd: {
      required: true,
      type: String,
    },
    talHalvskuggigtLage: {
      required: true,
      type: String,
    },
    talAntalMinusgrader: {
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
    kommerIgenEfterSkord: {
      required: true,
      type: String,
    },
    img: {
      type: String,
    },
  },
  { collection: 'plants' }
);

module.exports = mongoose.model('Data', dataSchema);
