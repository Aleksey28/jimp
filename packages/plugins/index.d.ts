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

type BlitRet = ReturnType<typeof blit>;
type BlurRet = ReturnType<typeof blur>;
type CircleRet = ReturnType<typeof circle>;
type ColorRet = ReturnType<typeof color>;
type ContainRet = ReturnType<typeof contain>;
type CoverRet = ReturnType<typeof cover>;
type CropRet = ReturnType<typeof crop>;
type DisplaceRet = ReturnType<typeof displace>;
type DitherRet = ReturnType<typeof dither>;
type FlipRet = ReturnType<typeof flip>;
type FisheyeRet = ReturnType<typeof fisheye>;
type GaussianRet = ReturnType<typeof gaussian>;
type InvertRet = ReturnType<typeof invert>;
type MaskRet = ReturnType<typeof mask>;
type NormalizeRet = ReturnType<typeof normalize>;
type PrintRet = ReturnType<typeof print>;
type ResizeRet = ReturnType<typeof resize>;
type RotateRet = ReturnType<typeof rotate>;
type ScaleRet = ReturnType<typeof scale>;
type ShadowRet = ReturnType<typeof shadow>;
type ThresholdRet = ReturnType<typeof threshold>;

/**
 * This is made union and not intersection to avoid issues with
 * `IllformedPlugin` and `WellFormedPlugin` when using typings with Jimp
 * generic
 *
 * In reality, this should be an intersection but our type data isn't
 * clever enough to figure out what's a class and what's not/etc
 */
type Plugins =
  | BlitRet
  | BlurRet
  | CircleRet
  | ColorRet
  | ContainRet
  | CoverRet
  | CropRet
  | DisplaceRet
  | DitherRet
  | FlipRet
  | FisheyeRet
  | GaussianRet
  | InvertRet
  | MaskRet
  | NormalizeRet
  | PrintRet
  | ResizeRet
  | RotateRet
  | ScaleRet
  | ShadowRet
  | ThresholdRet;

export default function(): Plugins;
