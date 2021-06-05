import test from 'ava';

import vec2 from './vec2';

//test sig fig
test('sgf', (t) => {
  const v1 = vec2(4.1512512, 3.14153, { precision: 10 });
  const p1 = 5;

  const v1p1 = v1.sgf(p1);
  t.is(v1p1.x, 4.1513);
  t.is(v1p1.y, 3.1415);
});

//test addition
test('add', (t) => {
  const v1 = vec2(1, 5);
  const v2 = vec2(-2, 3);
  const v3 = vec2(0, -1);
  const v4 = vec2(0, 0);

  const v12 = v1.add(v2);
  t.is(v12.x, -1);
  t.is(v12.y, 8);

  const v123 = v12.add(v3);
  t.is(v123.x, -1);
  t.is(v123.y, 7);

  const v1234 = v123.add(v4);
  t.is(v1234.x, -1);
  t.is(v1234.y, 7);
});

//test subtraction
test('sub', (t) => {
  const v1 = vec2(-2, -3);
  const v2 = vec2(-1, 6);
  const v3 = vec2(0, -1);
  const v4 = vec2(0, 0);

  const v12 = v1.sub(v2);
  t.is(v12.x, -1);
  t.is(v12.y, -9);

  const v123 = v12.sub(v3);
  t.is(v123.x, -1);
  t.is(v123.y, -8);

  const v1234 = v123.sub(v4);
  t.is(v1234.x, -1);
  t.is(v1234.y, -8);
});

//test multiplication
test('mul', (t) => {
  const v1 = vec2(4, -3);
  const k1 = 2;
  const v2 = vec2(-2, -3);
  const k2 = -3;
  const k3 = 0;

  const v1k1 = v1.mul(k1);
  t.is(v1k1.x, 8);
  t.is(v1k1.y, -6);

  const v2k2 = v2.mul(k2);
  t.is(v2k2.x, 6);
  t.is(v2k2.y, 9);

  const v1k2 = v1.mul(k2);
  t.is(v1k2.x, -12);
  t.is(v1k2.y, 9);

  const v2k1 = v2.mul(k1);
  t.is(v2k1.x, -4);
  t.is(v2k1.y, -6);

  const v1k3 = v1.mul(k3);
  t.is(v1k3.x, 0);
  t.is(v1k3.y, 0);
});

//test mul decimals
test('mul dec', (t) => {
  const v1 = vec2(2.1, 5);
  const k1 = 4;
  const v2 = vec2(-1, 11.5);
  const k2 = -3.5;
  const k3 = 0;

  const v1k1 = v1.mul(k1);
  t.is(v1k1.x, 8.4);
  t.is(v1k1.y, 20);

  const v2k2 = v2.mul(k2);
  t.is(v2k2.x, 3.5);
  t.is(v2k2.y, -40.25);

  const v1k2 = v1.mul(k2);
  t.is(v1k2.x, -7.35);
  t.is(v1k2.y, -17.5);

  const v2k1 = v2.mul(k1);
  t.is(v2k1.x, -4);
  t.is(v2k1.y, 46);

  const v1k3 = v1.mul(k3);
  t.is(v1k3.x, 0);
  t.is(v1k3.y, 0);
});

//test div
test('div', (t) => {
  const v1 = vec2(4, -3);
  const k1 = 2;
  const v2 = vec2(-2, -3);
  const k2 = -3;
  const k3 = 0;

  const v1k1 = v1.div(k1);
  t.is(v1k1.x, 2);
  t.is(v1k1.y, -3 / 2);

  const v2k2 = v2.div(k2, { precision: 3 });
  t.is(v2k2.x, Math.round((2 / 3 + Number.EPSILON) * 1000) / 1000);
  t.is(v2k2.y, 1);

  const v1k2 = v1.div(k2, { precision: 3 });
  t.is(v1k2.x, Math.round((-4 / 3 + Number.EPSILON) * 1000) / 1000);
  t.is(v1k2.y, 1);

  const v2k1 = v2.div(k1);
  t.is(v2k1.x, -1);
  t.is(v2k1.y, -3 / 2);

  const v1k3 = v1.div(k3);
  t.is(v1k3.x, Infinity);
  t.is(v1k3.y, -Infinity);
});

//test decimals
test('decimals', (t) => {
  const v1 = vec2(2.145124531, 1.3215151648, { precision: 5 }); //2.14512, 1.32152
  const v2 = vec2(3.95791531, 5.352362625, { precision: 5 }); //3.95792, 5.35236

  const a3 = v1.add(v2, { precision: 4 });
  t.is(a3.x, 6.103);
  t.is(a3.y, 6.6739);

  const v3 = vec2(2.145124531, 1.3215151648, { precision: 8 }); //2.145124531, 1.32151516
  const v4 = vec2(3.95791531, 5.352362625, { precision: 8 }); ////3.95791531, 5.35236263
  const a5 = v3.add(v4, { precision: 7 });
  t.is(a5.x, 6.1030398);
  t.is(a5.y, 6.6738778);
});

//test rotation
test('rot', (t) => {
  const v = vec2(1, 0).rot(Math.PI / 2); //rotate 90deg
  t.is(v.x, 0);
  t.is(v.y, 1);

  const v2 = vec2(1, 0).rot(180, true); //rotate 180deg
  t.is(v2.x, -1);
  t.is(v2.y, 0);
});

//test magnitude
test('mag', (t) => {
  t.is(vec2(3, 2).mag(), 3.606);
  t.is(vec2(0, 0).mag(), 0);
});

//test dot
test('dot', (t) => {
  const v1 = vec2(-2, -3);
  const v2 = vec2(-1, 6);
  const v3 = vec2(0, -1);
  const v4 = vec2(0, 0);

  const v1v2 = v1.dot(v2);
  t.is(v1v2, -16);

  const v1v3 = v1.dot(v3);
  t.is(v1v3, 3);

  const v1v4 = v1.dot(v4);
  t.is(v1v4, -0);

  const v2v3 = v2.dot(v3);
  t.is(v2v3, -6);
});

//test angles
test('ang', (t) => {
  const v1 = vec2(-2, -3);
  const v2 = vec2(-1, 6);
  const v3 = vec2(0, -1);
  const v4 = vec2(0, 0);

  t.is(v1.ang(v2), 2.388); //2.38844137
  t.is(v1.ang(v3), 0.588); //0.588002604
  t.is(v1.ang(v4), NaN);
  t.is(v2.ang(v3), 2.976); //2.97644398

  t.is(v1.ang(v2, true), 136.848);
  t.is(v1.ang(v3, true), 33.69);
  t.is(v1.ang(v4, true), NaN);
  t.is(v2.ang(v3, true), 170.538);
});

//test unit
test('unit', (t) => {
  const v1u = vec2(-2, -3).unit();
  const v2u = vec2(-1, 6).unit();
  const v3u = vec2(0, -1).unit();
  const v4u = vec2(0, 0).unit();

  t.is(v1u.x, -0.555);
  t.is(v1u.y, -0.832);
  t.is(v2u.x, -0.164);
  t.is(v2u.y, 0.986);
  t.is(v3u.x, 0);
  t.is(v3u.y, -1);
  t.is(v4u.x, NaN);
  t.is(v4u.y, NaN);
});

//test perp
test('perp', (t) => {
  const v1p = vec2(1, 0).perp();
  t.is(v1p.x, 0);
  t.is(v1p.y, -1);

  const v1pcc = vec2(1, 0).perp(false);
  t.is(v1pcc.x, 0);
  t.is(v1pcc.y, 1);

  const v2 = vec2(-4, 5).perp();
  t.is(v2.dot(v2.perp()), 0);
});

//test toString
test('toString', (t) => {
  const v1 = vec2(1, 6);
  const v2 = vec2(1521.412512, 5125.1252155, { precision: 5 });

  t.is(v1.toString(), '(1,6)');
  t.is(v2.toString(), '(1521.41251,5125.12522)');
});

//test equals
test('equals', (t) => {
  const v1 = vec2(2, 8);
  const v1m2 = vec2(4, 16);
  const v2 = vec2(2.15245, 1.12616);

  t.is(v1.equals(vec2(2, 8)), true);
  t.is(v1.equals(vec2(2, 9)), false);
  t.is(v1.mul(2).equals(v1m2), true);

  t.is(v2.equals(vec2(2.1, 1.1)), false);
});
