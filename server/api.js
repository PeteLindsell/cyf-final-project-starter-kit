import { Router } from "express";

import logger from "./utils/logger";
import db from "./db";

const router = Router();

const getCohorts = () => {
  return new Promise(function(resolve, reject) {
    db.query("SELECT * FROM cohorts ORDER BY id ASC", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/cohorts", (req, res) => {
  getCohorts()
  .then((response) => {
    res.status(200).send(response);
  })
  .catch((error) => {
    res.status(500).send(error);
  });
});

export default router;
