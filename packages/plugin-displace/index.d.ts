import { Jimp, ImageCallback } from '@my-jimp/core';

interface Displace {
  displace(map: Jimp, offset: number, cb?: ImageCallback<this>): this;
}

export default function(): Displace;
