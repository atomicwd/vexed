import { Options } from "./vec";

export type InitVec2 = (x: number, y: number, options?: Options) => Vec2;

export type Vec2 = {
  readonly x: number;
  readonly y: number;
  readonly _x: number;
  readonly _y: number;
  readonly sgf: (precision: number, opts?: Options) => Vec2;
  readonly mul: (arg: number|Vec2, opts?: Options) => Vec2
  readonly div: (arg: number|Vec2, opts?: Options) => Vec2;
  readonly add: (vec: Vec2, opts?: Options) => Vec2;
  readonly sub: (vec: Vec2, opts?: Options) => Vec2;
  readonly dot: (vec: Vec2) => number;
  readonly mag: (opts?: Options) => number;
  readonly unit: (opts?: Options) => Vec2;
  readonly ang: (vec: Vec2, asDegrees?: boolean, opts?: Options) => number;
  readonly toString: () => string;
  readonly toArray: () => readonly [number, number];
  readonly equals: (v: Vec2) => boolean;
  readonly rot: (angle: number, useDegrees?: boolean, opts?: Options) => Vec2;
  readonly perp: (clockwise?: boolean, opts?: Options) => Vec2;
};
