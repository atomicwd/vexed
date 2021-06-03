export type Options = {
  readonly precision: number;
};

export type Vec<V> = {
  readonly sgf: (precision: number, opts?: Options) => Vec<V> & V;
  readonly mul: (number: number, opts?: Options) => Vec<V> & V;
  readonly div: (number: number, opts?: Options) => Vec<V> & V;
  readonly add: (vec: Vec<V> & V, opts?: Options) => Vec<V> & V;
  readonly sub: (vec: Vec<V> & V, opts?: Options) => Vec<V> & V;
  readonly dot: (vec: Vec<V> & V) => number;
  readonly mag: (opts?: Options) => number;
  readonly unit: (opts?: Options) => Vec<V> & V;
  readonly ang: (
    vec: Vec<V> & V,
    asDegrees?: boolean,
    opts?: Options
  ) => number;
  readonly toString: () => string;
  readonly equals: (v: Vec<V> & V) => boolean;
};
