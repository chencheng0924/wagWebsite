export function getAssetsImgService(url) {
  return new URL(`../assets/img/service/${url}`, import.meta.url).href;
}
export function getAssetsImg(url) {
  return new URL(`../assets/img/${url}`, import.meta.url).href;
}