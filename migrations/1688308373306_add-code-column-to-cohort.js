/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql( `
    ALTER TABLE public.cohorts 
    ADD COLUMN code VARCHAR NOT NULL;
  `);
};

exports.down = (pgm) => {
  pgm.sql( `
    ALTER TABLE public.cohorts 
    DROP COLUMN code;
  `);
};