import { Options, Vec } from './vec';

export type XY = {
  readonly x: number;
  readonly y: number;
  readonly _x: number;
  readonly _y: number;
};

export type Vec2 = XY &
  Vec<XY> & {
    readonly rot: (
      angle: number,
      useDegrees?: boolean,
      opts?: Options
    ) => XY & Vec<XY>;
  };
