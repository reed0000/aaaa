module.exports = {
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use:"raw-loader"
      }
    );
    return config
  },
  reactStrictMode: true,
  images: { 
    domains:['dummyimage.com']
  }
}