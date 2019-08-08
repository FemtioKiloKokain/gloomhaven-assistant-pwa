module.exports = {
    chainWebpack: config => {
        // clear the existing images module
        const imagesRule = config.module.rule("images");
        imagesRule.uses.clear();

        imagesRule
        // you can set whatever you want or remove this line completely
            .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
            .use("file-loader")
            .loader("file-loader")
            .tap(options => {
                return {
                    ...options,
                    limit: -1 // no limit
                };
            })
            .end();

        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();

        svgRule
            .test(/\.svg$/)
            .use('svg-inline-loader')
            .loader('svg-inline-loader')
            .tap(options => {
                return {
                    ...options,
                    limit: -1 // no limit
                };
            })
            .end();
    }
};
