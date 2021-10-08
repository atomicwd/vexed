import test from "ava";

import { round, sgf, TO_DEG, TO_RAD } from "./math";

const k1 = 1.5124512;
const k2 = 9238576.0235871;
const k3 = 0.1;
const k4 = 6123351.12;
const k5 = 0;

//test sig figs
test("sgf", (t) => {
  t.is(sgf(k1, 3), 1.51);
  t.is(sgf(k1, 4), 1.512);
  t.is(sgf(k1, 5), 1.5125);

  t.is(sgf(k2, 3), 9240000);
  t.is(sgf(k2, 5), 9238600);
  t.is(sgf(k2, 7), 9238576);
  t.is(sgf(k2, 9), 9238576.02);

  t.is(sgf(k3, 3), 0.1);
  t.is(sgf(k3, 2), 0.1);
  t.is(sgf(k3, 1), 0.1);

  t.is(sgf(k4, 3), 6120000);
  t.is(sgf(k4, 5), 6123400);
  t.is(sgf(k4, 8), 6123351.1);
  t.is(sgf(k4, 10), 6123351.12);

  t.is(sgf(k5, 3), 0);
  t.is(sgf(k5, 5), 0);
  t.is(sgf(k5, 0), 0);
});

//test rounding
test("round", (t) => {
  t.is(round(k1, 3), 1.512);
  t.is(round(k1, 4), 1.5125);
  t.is(round(k1, 5), 1.51245);
  t.is(round(k1, 6), 1.512451);

  t.is(round(k2, 3), 9238576.024);
  t.is(round(k2, 5), 9238576.02359);
  t.is(round(k2, 7), 9238576.0235871);
  t.is(round(k2, 9), 9238576.0235871);
});

test("toDEG", (t) => {
  t.is(TO_DEG * Math.PI, 180);

  t.is(TO_DEG * TO_RAD, 1);
});

test("toRAD", (t) => {
  t.is(TO_RAD * 180, Math.PI);
  t.is(TO_RAD * TO_DEG * Math.PI, Math.PI);
});
