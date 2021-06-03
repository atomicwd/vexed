export function sgf(number: number, precision: number): number {
  if (number === 0 || precision === 0) {
    return 0;
  }
  const m =
    (Math.pow(10, precision - Math.floor(Math.log(number) / Math.LN10) - 1) *
      10) /
    10;

  return +(Math.round((number + Number.EPSILON) * m) / m);
}

export function round(number: number, precision: number): number {
  const k = 10 ** precision;
  return Math.round((number + Number.EPSILON) * k) / k;
}

export const TO_DEG = 180 / Math.PI;
export const TO_RAD = Math.PI / 180;
