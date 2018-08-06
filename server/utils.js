import assetManifest from '../build/asset-manifest.json'

export const assetPath = (type) => {
  const entries = Object.entries(assetManifest)
  if (type === 'js' || type === 'javascript') {
    return entries.filter((asset) => {
      return asset[0].endsWith('.js')
    })
  }
  if (type === 'css') {
    return entries.filter((asset) => {
      return asset[0].endsWith('.css')
    })
  }
}
