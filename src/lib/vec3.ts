import { Options } from "../types/vec";
import { Axis, Vec3 } from "../types/vec3";

import { round, sgf, TO_DEG, TO_RAD } from "./math";

//default options
const options: Options = {
  precision: 3,
};

const vec3 = (x: number, y: number, z: number, opts = options): Vec3 => {
  const mag: Vec3["mag"] = () => (x * x + y * y + z * z) ** 0.5;
  const dot: Vec3["dot"] = (v) => x * v._x + y * v._y + z * v._z;
  const rx = round(x, opts.precision);
  const ry = round(y, opts.precision);
  const rz = round(z, opts.precision);
  return {
    _x: x,
    _y: y,
    _z: z,
    x: rx,
    y: ry,
    z: rz,
    sgf: (p, o = opts) => vec3(sgf(x, p), sgf(y, p), sgf(z, p), o),
    mul: (n, o = opts) => vec3(x * n, y * n, z * n, o),
    div: (n, o = opts) => vec3(x / n, y / n, z / n, o),
    add: (v, o = opts) => vec3(x + v._x, y + v._y, z + v._z, o),
    sub: (v, o = opts) => vec3(x - v._x, y - v._y, z - v._z, o),
    dot: (v) => dot(v),
    cross: (v, o = opts) =>
      vec3(y * v._z - z * v._y, z * v._x - x * v._z, x * v._y - y * v._x, o),
    mag: (o = opts) => round(mag(), o.precision),
    unit: (o = opts) => {
      const m = mag();
      return vec3(x / m, y / m, z / m, o);
    },
    rot: (angle, axis, useDegrees = false, o) => {
      const k = useDegrees ? TO_RAD : 1;
      const cosA = Math.cos(k * angle);
      const sinA = Math.sin(k * angle);
      switch (axis) {
        case Axis.X:
          return vec3(x, y * cosA - z * sinA, y * sinA + z * cosA, o);
        case Axis.Y:
          return vec3(x * cosA + z * sinA, y, -x * sinA + z * cosA, o);
        case Axis.Z:
          return vec3(x * cosA - y * sinA, x * sinA + y * cosA, z, o);
        default: {
          const v = vec3(x, y, z);
          const a = axis.unit();
          return v
            .mul(cosA)
            .add(a.mul((1 - cosA) * v.dot(a)).add(v.cross(a.mul(sinA))), o);
        }
      }
    },
    ang: (v: Vec3, asDegrees = false, o = opts) => {
      const k = asDegrees ? TO_DEG : 1;
      const a =
        k * Math.acos(dot(v) / (mag() * v.mag({ precision: o.precision + 2 })));
      return round(a, o.precision);
    },
    toString: () => {
      return `(${rx},${ry},${rz})`;
    },
    equals: (v) => {
      return rx === v._x && ry === v._y && rz === v._z;
    },
  };
};

export default vec3;
