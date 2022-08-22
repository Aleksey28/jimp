import { ImageCallback, Jimp } from '@my-jimp/core';

interface Mask {
  mask(src: Jimp, x: number, y: number, cb?: ImageCallback<this>): this;
}

export default function(): Mask;
