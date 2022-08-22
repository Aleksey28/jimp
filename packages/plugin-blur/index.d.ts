import { ImageCallback } from '@my-jimp/core';

interface Blur {
  blur(r: number, cb?: ImageCallback<this>): this;
}

export default function(): Blur;
