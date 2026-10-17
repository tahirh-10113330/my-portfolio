/** Prefix public assets when deployed under a GitHub Pages repository path. */
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
}
