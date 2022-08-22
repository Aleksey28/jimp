import { mergeDeep } from 'timm';

import blit from '@my-jimp/plugin-blit';
import blur from '@my-jimp/plugin-blur';
import circle from '@my-jimp/plugin-circle';
import color from '@my-jimp/plugin-color';
import contain from '@my-jimp/plugin-contain';
import cover from '@my-jimp/plugin-cover';
import crop from '@my-jimp/plugin-crop';
import displace from '@my-jimp/plugin-displace';
import dither from '@my-jimp/plugin-dither';
import fisheye from '@my-jimp/plugin-fisheye';
import flip from '@my-jimp/plugin-flip';
import gaussian from '@my-jimp/plugin-gaussian';
import invert from '@my-jimp/plugin-invert';
import mask from '@my-jimp/plugin-mask';
import normalize from '@my-jimp/plugin-normalize';
import print from '@my-jimp/plugin-print';
import resize from '@my-jimp/plugin-resize';
import rotate from '@my-jimp/plugin-rotate';
import scale from '@my-jimp/plugin-scale';
import shadow from '@my-jimp/plugin-shadow';
import threshold from '@my-jimp/plugin-threshold';

const plugins = [
  blit,
  blur,
  circle,
  color,
  contain,
  cover,
  crop,
  displace,
  dither,
  fisheye,
  flip,
  gaussian,
  invert,
  mask,
  normalize,
  print,
  resize,
  rotate,
  scale,
  shadow,
  threshold
];

export default jimpEvChange => {
  const initializedPlugins = plugins.map(pluginModule => {
    let plugin = pluginModule(jimpEvChange) || {};

    if (!plugin.class && !plugin.constants) {
      // Default to class function
      plugin = { class: plugin };
    }

    return plugin;
  });

  return mergeDeep(...initializedPlugins);
};
