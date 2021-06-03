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

export type Vec3 = XYZ &
  Vec<XYZ> & {
    readonly cross: (vec: XYZ, opts?: Options) => XYZ & Vec<XYZ>;
    readonly rot: (
      angle: number,
      axis: Axis | Vec3,
      useDegrees?: boolean,
      opts?: Options
    ) => XYZ & Vec<XYZ>;
  };
