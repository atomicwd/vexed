import { Options, Vec } from './vec';

export enum Axis {
  X,
  Y,
  Z,
}

export type XYZ = {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly _x: number;
  readonly _y: number;
  readonly _z: number;
};

type Vec3Ops = {
  readonly cross: (
    vec: XYZ,
    opts?: Options
  ) => XYZ & Vec<XYZ & Vec3Ops> & Vec3Ops;
  readonly rot: (
    angle: number,
    axis: Axis | Vec3,
    useDegrees?: boolean,
    opts?: Options
  ) => XYZ & Vec<XYZ & Vec3Ops> & Vec3Ops;
};

export type Vec3 = XYZ & Vec<XYZ & Vec3Ops> & Vec3Ops;
