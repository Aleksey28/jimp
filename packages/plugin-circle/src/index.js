import { isNodePattern } from '@my-jimp/utils';

/**
 * Creates a circle out of an image.
 * @param {function(Error, Jimp)} options (optional) radius, x, y
 * @param {function(Error, Jimp)} cb (optional) a callback for when complete
 * @returns {Jimp} this for chaining of methods
 */
export default () => ({
  circle(options = {}, cb) {
    if (typeof options === 'function') {
      cb = options;
      options = {};
    }

    const radius =
      options.radius ||
      (this.bitmap.width > this.bitmap.height
        ? this.bitmap.height
        : this.bitmap.width) / 2;

    const center = {
      x: typeof options.x === 'number' ? options.x : this.bitmap.width / 2,
      y: typeof options.y === 'number' ? options.y : this.bitmap.height / 2
    };

    this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(
      x,
      y,
      idx
    ) {
      const curR = Math.sqrt(
        Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2)
      );

      if (radius - curR <= 0.0) {
        this.bitmap.data[idx + 3] = 0;
      } else if (radius - curR < 1.0) {
        this.bitmap.data[idx + 3] = 255 * (radius - curR);
      }
    });

    if (isNodePattern(cb)) {
      cb.call(this, null, this);
    }

    return this;
  }
});
