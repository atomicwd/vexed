import test from 'ava';

import { Axis } from '../types/vec3';

import vec3 from './vec3';

//test sig fig
test('sgf', (t) => {
  const v1 = vec3(4.1512512, 3.14153, 1.5161512631125, { precision: 10 });
  const p1 = 5;

  const v1p1 = v1.sgf(p1);
  t.is(v1p1.x, 4.1513);
  t.is(v1p1.y, 3.1415);
  t.is(v1p1.z, 1.5162);
});

// const makeTestValues =
//   (t: ExecutionContext) => (v: Vec3, x: number, y: number, z: number) => {
//     t.is(v.x, x);
//     t.is(v.y, y);
//     t.is(v.z, z);
//   };

//test addition
test('add', (t) => {
  const v1 = vec3(1, 5, 10);
  const v2 = vec3(-2, 3, 2);
  const v3 = vec3(0, -1, 5);
  const v4 = vec3(0, 0, 0);

  const v12 = v1.add(v2);
  t.is(v12.x, -1);
  t.is(v12.y, 8);
  t.is(v12.z, 12);

  const v123 = v12.add(v3);
  t.is(v123.x, -1);
  t.is(v123.y, 7);
  t.is(v123.z, 17);

  const v1234 = v123.add(v4);
  t.is(v1234.x, -1);
  t.is(v1234.y, 7);
  t.is(v1234.z, 17);
});

//test subtraction
test('sub', (t) => {
  const v1 = vec3(-2, -3, -1);
  const v2 = vec3(-1, 6, -2);
  const v3 = vec3(0, -1, 0);
  const v4 = vec3(0, 0, 0);

  const v12 = v1.sub(v2);
  t.is(v12.x, -1);
  t.is(v12.y, -9);
  t.is(v12.z, 1);

  const v123 = v12.sub(v3);
  t.is(v123.x, -1);
  t.is(v123.y, -8);
  t.is(v123.z, 1);

  const v1234 = v123.sub(v4);
  t.is(v1234.x, -1);
  t.is(v1234.y, -8);
  t.is(v1234.z, 1);
});

//test multiplication
test('mul', (t) => {
  const v1 = vec3(4, -3, 7);
  const k1 = 2;
  const v2 = vec3(-2, -3, 1);
  const k2 = -3;
  const k3 = 0;

  const v1k1 = v1.mul(k1);
  t.is(v1k1.x, 8);
  t.is(v1k1.y, -6);
  t.is(v1k1.z, 14);

  const v2k2 = v2.mul(k2);
  t.is(v2k2.x, 6);
  t.is(v2k2.y, 9);
  t.is(v2k2.z, -3);

  const v1k2 = v1.mul(k2);
  t.is(v1k2.x, -12);
  t.is(v1k2.y, 9);
  t.is(v1k2.z, -21);

  const v2k1 = v2.mul(k1);
  t.is(v2k1.x, -4);
  t.is(v2k1.y, -6);
  t.is(v2k1.z, 2);

  const v1k3 = v1.mul(k3);
  t.is(v1k3.x, 0);
  t.is(v1k3.y, 0);
  t.is(v1k3.z, 0);
});

//test div
test('div', (t) => {
  const v1 = vec3(4, -3, 6);
  const k1 = 2;
  const v2 = vec3(-2, -3, 9);
  const k2 = -3;
  const k3 = 0;

  const v1k1 = v1.div(k1);
  t.is(v1k1.x, 2);
  t.is(v1k1.y, -1.5);
  t.is(v1k1.z, 3);

  const v2k2 = v2.div(k2, { precision: 3 });
  t.is(v2k2.x, Math.round((2 / 3 + Number.EPSILON) * 1000) / 1000);
  t.is(v2k2.y, 1);
  t.is(v2k2.z, -3);

  const v1k2 = v1.div(k2, { precision: 3 });
  t.is(v1k2.x, Math.round((-4 / 3 + Number.EPSILON) * 1000) / 1000);
  t.is(v1k2.y, 1);
  t.is(v1k2.z, -2);

  const v2k1 = v2.div(k1);
  t.is(v2k1.x, -1);
  t.is(v2k1.y, -1.5);
  t.is(v2k1.z, 4.5);

  const v1k3 = v1.div(k3);
  t.is(v1k3.x, Infinity);
  t.is(v1k3.y, -Infinity);
  t.is(v1k3.z, Infinity);
});

//test decimals
test('decimals', (t) => {
  const v1 = vec3(2.145124531, 1.3215151648, 5.12512424, { precision: 5 }); //2.14512, 1.32152, 5.12512
  const v2 = vec3(3.95791531, 5.352362625, 15.521516121, { precision: 5 }); //3.95792, 5.35236, 15.52152

  const a3 = v1.add(v2, { precision: 4 });
  t.is(a3.x, 6.103);
  t.is(a3.y, 6.6739);
  t.is(a3.z, 20.6466);

  const v3 = vec3(2.145124531, 1.3215151648, 5.12512424, { precision: 8 }); //2.14512453, 1.32151516, 5.12512424
  const v4 = vec3(3.95791531, 5.352362625, 15.521516121, { precision: 8 }); //3.95791531, 5.35236263, 15.52151612
  const a5 = v3.add(v4, { precision: 7 });

  t.is(a5.x, 6.1030398);
  t.is(a5.y, 6.6738778);
  t.is(a5.z, 20.6466404);
});

//test rotation
test('rot', (t) => {
  const v1 = vec3(1, 0, 0);
  const v1x = v1.rot(Math.PI / 2, Axis.X); //rotate 90deg
  t.is(v1x.x, 1);
  t.is(v1x.y, 0);
  t.is(v1x.z, 0);

  const v1y = v1.rot(Math.PI / 2, Axis.Y); //rotate 90deg
  t.is(v1y.x, 0);
  t.is(v1y.y, 0);
  t.is(v1y.z, -1);

  const v1z = v1.rot(Math.PI / 2, Axis.Z); //rotate 90deg
  t.is(v1z.x, 0);
  t.is(v1z.y, 1);
  t.is(v1z.z, 0);

  const v2 = vec3(1, 1.5, -1).rot(180, Axis.X, true); //rotate 180deg
  t.is(v2.x, 1);
  t.is(v2.y, -1.5);
  t.is(v2.z, 1);

  const v3 = vec3(1, 2.5, 1.5).rot(180, vec3(1, 4, 5), true, { precision: 1 }); //rotate 180deg
  t.is(v3.x, -0.1);
  t.is(v3.y, 1);
  t.is(v3.z, 2.9);
});

//test magnitude
test('mag', (t) => {
  t.is(vec3(3, 2, 5).mag(), 6.164);
  t.is(vec3(0, 0, 0).mag(), 0);
});

//test dot
test('dot', (t) => {
  const v1 = vec3(-2, -3, 5);
  const v2 = vec3(-1, 6, 10);
  const v3 = vec3(0, -1, -2);
  const v4 = vec3(0, 0, 0);

  const v1v2 = v1.dot(v2);
  t.is(v1v2, 34);

  const v1v3 = v1.dot(v3);
  t.is(v1v3, -7);

  const v1v4 = v1.dot(v4);
  t.is(v1v4, 0);

  const v2v3 = v2.dot(v3);
  t.is(v2v3, -26);
});

//test angles
test('ang', (t) => {
  const v1 = vec3(-2, -3, 5);
  const v2 = vec3(-1, 6, 10);
  const v3 = vec3(0, -1, -2);
  const v4 = vec3(0, 0, 0);

  t.is(v1.ang(v2), 1.08); //1.08011903
  t.is(v1.ang(v3), 2.103); //2.10346417
  t.is(v1.ang(v4), NaN);
  t.is(v2.ang(v3), 3.027); //3.02671605

  t.is(v1.ang(v2, true), 61.886);
  t.is(v1.ang(v3, true), 120.52);
  t.is(v1.ang(v4, true), NaN);
  t.is(v2.ang(v3, true), 173.418);
});

//test unit
test('unit', (t) => {
  const v1u = vec3(-2, -3, 16).unit();
  const v2u = vec3(-1, 6, -4).unit();
  const v3u = vec3(0, -1, 6).unit();
  const v4u = vec3(0, 0, 0).unit();

  t.is(v1u.x, -0.122);
  t.is(v1u.y, -0.183);
  t.is(v1u.z, 0.976);

  t.is(v2u.x, -0.137);
  t.is(v2u.y, 0.824);
  t.is(v2u.z, -0.549);

  t.is(v3u.x, 0);
  t.is(v3u.y, -0.164);
  t.is(v3u.z, 0.986);

  t.is(v4u.x, NaN);
  t.is(v4u.y, NaN);
  t.is(v4u.z, NaN);
});

//test toString
test('toString', (t) => {
  const v1 = vec3(1, 6, 10);
  const v2 = vec3(1521.412512, 5125.1252155, 3128.421516735, { precision: 5 });

  t.is(v1.toString(), '(1,6,10)');
  t.is(v2.toString(), '(1521.41251,5125.12522,3128.42152)');
});

//test equals
test('equals', (t) => {
  const v1 = vec3(2, 8, 10);
  const v1m2 = vec3(4, 16, 20);
  const v2 = vec3(2.15245, 1.12616, 2.512512161124);

  t.is(v1.equals(vec3(2, 8, 10)), true);
  t.is(v1.equals(vec3(2, 9, 11)), false);
  t.is(v1.mul(2).equals(v1m2), true);

  t.is(v2.equals(vec3(2.1, 1.1, 2.5)), false);
});
