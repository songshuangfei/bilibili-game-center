const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    config = rewireLess.withLoaderOptions({
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#22ade5" },
    })(config, env);
    return config;
};