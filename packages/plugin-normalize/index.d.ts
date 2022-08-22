import { ImageCallback } from '@my-jimp/core';

interface Normalize {
  normalize(cb ?: ImageCallback<this>): this;
}

export default function(): Normalize;
