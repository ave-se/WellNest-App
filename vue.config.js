// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env'].__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;
        return args;
      });
  }
};