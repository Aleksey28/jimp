import { Jimp, getTestDir } from '@my-jimp/test-utils';
import configure from '@my-jimp/custom';
import jpeg from '@my-jimp/jpeg';
import color from '@my-jimp/plugin-color';
import resize from '@my-jimp/plugin-resize';

import threshold from '../src';

const jimp = configure(
  { types: [jpeg], plugins: [threshold, color, resize] },
  Jimp
);

describe('Threshold', function() {
  this.timeout(15000);

  it('defines default threshold for lighter backgrounds', async () => {
    const expectedImage = await jimp.read(
      getTestDir(__dirname) + '/images/hands_mx200_rp255.jpg'
    );
    const testImage = await jimp.read(
      getTestDir(__dirname) + '/images/hands.jpg'
    );

    testImage
      .threshold({ max: 200, replace: 255 })
      .hash()
      .should.be.equal(expectedImage.hash());
  });
});
