import { ImageCallback } from '@my-jimp/core';

interface Gaussian {
  gaussian(r: number, cb?: ImageCallback<this>): this;
}

export default function(): Gaussian;
