import { ImageCallback } from '@my-jimp/core';

interface Flip {
  flip(horizontal: boolean, vertical: boolean, cb?: ImageCallback<this>): this;
  mirror(horizontal: boolean, vertical: boolean, cb?: ImageCallback<this>): this;
}

export default function(): Flip;
