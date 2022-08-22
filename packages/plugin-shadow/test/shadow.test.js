import { Jimp, mkJGD, getTestDir } from '@my-jimp/test-utils';
import configure from '@my-jimp/custom';
import resize from '@my-jimp/plugin-resize';
import blur from '@my-jimp/plugin-blur';

import shadow from '../src';

const jimp = configure({ plugins: [shadow, resize, blur] }, Jimp);

describe('Shadow', () => {
  it('creates a shadow', async () => {
    const expectedImg = await jimp.read(
      getTestDir(__dirname) + '/images/shadow.png'
    );
    const testImage = await jimp.read(
      mkJGD(
        '          ',
        '    ◆◆    ',
        '   ◆▦▦◆   ',
        '  ◆▦▦▦▦◆  ',
        '   ◆▦▦◆   ',
        '    ◆◆    ',
        '          '
      )
    );

    testImage
      .shadow({ x: -1, y: 1, blur: 1 })
      .bitmap.data.should.be.deepEqual(expectedImg.bitmap.data);
  });
});
