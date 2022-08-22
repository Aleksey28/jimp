import { ImageCallback } from '@my-jimp/core';

interface Invert {
  invert(cb?: ImageCallback<this>): this;
}

export default function(): Invert;
