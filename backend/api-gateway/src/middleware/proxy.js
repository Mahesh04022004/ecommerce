const axios = require("axios");

const proxyTo = (serviceUrl) => {
  return async (req, res) => {
    try {
      const fullUrl = `${serviceUrl}${req.originalUrl}`;
      console.log(`🔄 ${req.method} → ${fullUrl}`);

      const response = await axios({
        method: req.method,
        url: fullUrl,
        data: req.body,
        headers: {
          "Content-Type": req.headers["content-type"],
          Authorization: req.headers.authorization || "",
        },
      });

      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        res.status(500).json({
          error: `${serviceUrl} service unavailable`,
        });
      }
    }
  };
};

module.exports = { proxyTo };
