import { Options, Vec } from './vec';

export type XY = {
  readonly x: number;
  readonly y: number;
  readonly _x: number;
  readonly _y: number;
};

type Vec2Ops = {
  readonly rot: (
    angle: number,
    useDegrees?: boolean,
    opts?: Options
  ) => XY & Vec<XY & Vec2Ops> & Vec2Ops;

  readonly perp: (clockwise?: boolean) => Vec2;
};

export type Vec2 = XY & Vec<XY & Vec2Ops> & Vec2Ops;
