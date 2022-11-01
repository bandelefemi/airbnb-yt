/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com']
  },

  env: {
    mapbox_key: 'pk.eyJ1IjoiYmFuZGVsZWZlbWkiLCJhIjoiY2w5dHhraWo5MDczbDNvdWszd3VsNDQxayJ9.PWoweNxJwX2hdTnTHZiyeg'
  }
}

module.exports = nextConfig
