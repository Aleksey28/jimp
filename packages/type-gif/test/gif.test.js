import { Jimp, getTestDir } from '@my-jimp/test-utils';
import configure from '@my-jimp/custom';

import gif from '../src';

const jimp = configure({ types: [gif] }, Jimp);

describe('GIF', () => {
  const imagesDir = getTestDir(__dirname) + '/images';

  it('load GIF', async () => {
    const image = await jimp.read(imagesDir + '/flower.gif');
    image.getPixelColor(10, 10).should.be.equal(0xe5e6d9ff);
  });

  it('load animated GIF', async () => {
    const image = await jimp.read(imagesDir + '/animated.gif');
    image.getPixelColor(10, 10).should.be.equal(0xa1d2f1ff);
  });

  it('export GIF', async () => {
    const jgd = await jimp.read(imagesDir + '/flower.gif');
    const buffer = await jgd.getBufferAsync('image/gif');
    buffer
      .toString()
      .startsWith('GIF')
      .should.be.equal(true);
  });
});
