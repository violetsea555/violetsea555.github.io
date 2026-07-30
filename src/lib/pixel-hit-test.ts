const imageDataCache = new Map<string, Promise<ImageData>>();
const resolvedCache = new Map<string, ImageData>(); // new — synchronous lookups once resolved

function getImageData(src: string): Promise<ImageData> {
  if (imageDataCache.has(src)) return imageDataCache.get(src)!;

  const promise = new Promise<ImageData>((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      resolvedCache.set(src, data); // stash for sync access
      resolve(data);
    };
    img.onerror = reject;
    img.src = src;
  });

  imageDataCache.set(src, promise);
  return promise;
}

export async function isOpaqueAt(
  src: string,
  xRatio: number,
  yRatio: number,
): Promise<boolean> {
  const data = await getImageData(src);
  return checkAlpha(data, xRatio, yRatio);
}

// New — returns null if not decoded yet, instead of waiting
export function isOpaqueAtSync(
  src: string,
  xRatio: number,
  yRatio: number,
): boolean | null {
  const data = resolvedCache.get(src);
  if (!data) return null;
  return checkAlpha(data, xRatio, yRatio);
}

function checkAlpha(data: ImageData, xRatio: number, yRatio: number): boolean {
  const x = Math.floor(xRatio * data.width);
  const y = Math.floor(yRatio * data.height);
  if (x < 0 || y < 0 || x >= data.width || y >= data.height) return false;
  return data.data[(y * data.width + x) * 4 + 3] > 10;
}

export function preloadImageData(src: string) {
  getImageData(src);
}
