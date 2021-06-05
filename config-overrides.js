const { override, adjustStyleLoaders, fixBabelImports } = require('customize-cra');
const postcssNormalize = require('postcss-normalize');
const localIdentName = '[hash:base64:5]'
const addLessLoader = () => (config) => {
    // Need these for production mode, which are copied from react-scripts
    const paths = require('react-scripts/config/paths');
  
    const getLessLoader = (cssLoaderOptions) => {
      return [
        'style-loader'
         ,
        {
          loader: require.resolve('css-loader'),
          options: {
            ...cssLoaderOptions,
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              require('postcss-preset-env')({
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
              }),
              postcssNormalize(),
            ],
          },
        },
        {
          loader: require.resolve('less-loader'),
          options: {
            // strictMath: false,
            // noIeCompat: true,
            // javascriptEnabled: true,

          },
        },
      ];
    };
  
    const loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf)).oneOf;
  
    // Insert less-loader as the penultimate item of loaders (before file-loader)
    loaders.splice(
      loaders.length - 1,
      0,
      {
        test: /\.less$/,
        exclude: /node_modules[\\/]antd/,
        use: getLessLoader({
          modules: {
            localIdentName,
          },
        }),
      },
      {
        test: /\.less$/,
        include: /node_modules[\\/]antd/,
        use: getLessLoader(),
      }
    );
  
    return config;
  };
  

module.exports = {
    webpack: override(
    addLessLoader()
    )
};
