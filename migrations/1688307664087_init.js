/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql( `
    CREATE TABLE public.cohorts (
      id SERIAL PRIMARY KEY,
      name character varying(50) NOT NULL,
      start_date date NOT NULL
    );
  `);
};

exports.down = (pgm) => {
  pgm.sql( `
    DROP TABLE public.cohorts;
  `);
};
