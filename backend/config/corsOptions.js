const allowedOptions = require("./alloweOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOptions.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    }else{
        callback(new Error('Not alllowed by cors'))
    }
  },
  optionsSuccessStatus: 200
};

module.exports = corsOptions
