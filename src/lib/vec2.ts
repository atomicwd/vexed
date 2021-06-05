import { Options } from '../types/vec';
import { Vec2, XY } from '../types/vec2';

import { round, sgf, TO_DEG, TO_RAD } from './math';

//default options
const options: Options = {
  precision: 3,
};

const vec2 = (x: number, y: number, opts = options): Vec2 => {
  const mag = () => (x * x + y * y) ** 0.5;
  const dot = (v: XY) => x * v._x + y * v._y;

  const rx = round(x, opts.precision);
  const ry = round(y, opts.precision);
  return {
    _x: x,
    _y: y,
    x: rx,
    y: ry,
    sgf: (p, o = opts) => vec2(sgf(x, p), sgf(y, p), o),
    mul: (n, o = opts) => vec2(x * n, y * n, o),
    div: (n, o = opts) => vec2(x / n, y / n, o),
    add: (v, o = opts) => vec2(x + v._x, y + v._y, o),
    sub: (v, o = opts) => vec2(x - v._x, y - v._y, o),
    dot: (v) => dot(v),
    mag: (o = opts) => round(mag(), o.precision),
    unit: (o = opts) => {
      const m = mag();
      return vec2(x / m, y / m, o);
    },
    rot: (a: number, useDegrees = false, o = opts) => {
      const k = useDegrees ? TO_RAD : 1;
      const cosA = Math.cos(k * a);
      const sinA = Math.sin(k * a);
      return vec2(x * cosA - y * sinA, x * sinA + y * cosA, o);
    },
    ang: (v: Vec2, asDegrees = false, o = opts) => {
      const k = asDegrees ? TO_DEG : 1;
      const a =
        k * Math.acos(dot(v) / (mag() * v.mag({ precision: o.precision + 2 })));
      return round(a, o.precision);
    },
    perp: (clockwise = true) => {
      const k = clockwise ? 1 : -1;
      return vec2(k * y, -k * x);
    },
    toString: () => {
      return `(${rx},${ry})`;
    },
    equals: (v) => {
      return rx === v._x && ry === v._y;
    },
  };
};

export default vec2;
