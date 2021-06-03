# Vexed

Functional JS TS Vector library.

## Features

There are two main features, 2D and 3D vectors.

### Common functions

Two and three dimensional vectors share the expected functions:

> **mul(number: number, opts?: Options):Vec**
> multiplies the vector by a scalar number returning a vector.

> **div(number: number, opts?: Options):Vec**
> divides the vector by a scalar number returning a vector.

> **add(vec: Vec, opts?: Options):Vec**
> adds a vector to the current vector returning a vector.

> **sub(vec: Vec, opts?: Options):Vec**
> subtracts a vector from the current vector returning a vector.

> **dot(vec: Vec, opts?: Options):number**
> returns the dot product of the vector with the provided vector.

> **mag(opts?: Options):number**
> returns the magnitude of the current vector.

> **unit(opts?: Options):Vec**
> returns the unit vector.

> **ang(vec: Vec, asDegrees?: boolean, opts?: Options):number**
> returns the angle between the vector and given vector, **asDegrees** defaults to **false.**

> **toString():string**
> returns a string representation of the vector in the form **(x,y) or (x,y,z)**.

> **equals(vec: Vec):booleans**
> returns a boolean determined by the strict equality comparison of each vector component.

> **sgf(precision: number):booleans**
> returns the vector with the its components rounded to the number of significant figures specified.

### Vec2D functions

> **rot: (angle: number, useDegrees?: boolean, opts?: Options) => Vec2D**
> returns a vector rotated by the provided angle, **asDegrees** defaults to **false.**

### Vec3D functions

> **cross: (vec: Vec3D, opts?: Options) => Vec3D**
> returns the cross product of the vector with the provided vector.

> **rot: (angle: number, axis: Axis|Vec3D, useDegrees?: boolean, opts?: Options) => Vec3D**
> returns a vector rotated around a given axis or vector by the provided angle, **asDegrees** defaults to **false.** The axis argument may be an enum field Axis.X, Axis.Y, Axis.Z or any Vec3D instance.

### Types

Aside from Vec2D and Vec3D, Vexed provided the following types:

**Options**
Most functions accept an options object. This currently contains only a precision field which will round the components of the vector to the specified number of decimal places. This will be carried forward across all subsequent operations on the vector.

**Axis**
The Axis enum field Axis.X, Axis.Y and Axis.Z represent the X,Y and Z axes respectively. **Axis.X=(1,0,0), Axis.Y=(0,1,0), Axis.Z=(0,0,1)**

## Notes

- Immutable by design.
- Written in Typescript.
- Not optimized for performance.
- \>3kb gzipped
