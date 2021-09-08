import { Options } from './vec';

export enum Axis {
  X,
  Y,
  Z,
}

export type Vec3 = {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly _x: number;
  readonly _y: number;
  readonly _z: number;
  readonly sgf: (precision: number, opts?: Options) => Vec3;
  readonly mul: (number: number, opts?: Options) => Vec3;
  readonly div: (number: number, opts?: Options) => Vec3;
  readonly add: (vec: Vec3, opts?: Options) => Vec3;
  readonly sub: (vec: Vec3, opts?: Options) => Vec3;
  readonly dot: (vec: Vec3) => number;
  readonly mag: (opts?: Options) => number;
  readonly unit: (opts?: Options) => Vec3;
  readonly ang: (
    vec: Vec3,
    asDegrees?: boolean,
    opts?: Options
  ) => number;
  readonly toString: () => string;
  readonly equals: (v: Vec3) => boolean;
  readonly cross: (
    vec: Vec3,
    opts?: Options
  ) =>Vec3
  readonly rot: (
    angle: number,
    axis: Axis | Vec3,
    useDegrees?: boolean,
    opts?: Options
  ) =>Vec3
};



