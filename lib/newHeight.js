/**
 * Calculates the proper height of an image with a custom width, preserving the original aspect ratio.
 *
 * @param originalHeight
 * @param originalWidth
 * @param newWidth
 */

export function newHeight(originalWidth, originalHeight, newWidth) {
  return (originalHeight / originalWidth) * newWidth
}
