import { mergeDeep } from 'timm';

import jpeg from '@my-jimp/jpeg';
import png from '@my-jimp/png';
import bmp from '@my-jimp/bmp';
import tiff from '@my-jimp/tiff';
import gif from '@my-jimp/gif';

export default () => mergeDeep(jpeg(), png(), bmp(), tiff(), gif());
