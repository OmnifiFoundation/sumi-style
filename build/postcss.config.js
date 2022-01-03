const fs = require('fs');
module.exports = (ctx) => {
    const prefix = ctx.env === "compat" ? "" : "";

    return {
        map: ctx.options.map,
        parser: ctx.options.parser,
        plugins: {
            "postcss-import": { root: ctx.file.dirname },
            "postcss-prefixer": {
                prefix,
                ignore: [/\[class\*=.*\]/],
            },
            "postcss-preset-env": {
                autoprefixer: {
                    cascade: false,
                },
                features: {
                    "custom-properties": true,
                },
            },
            cssnano: ctx.env === "production" || ctx.env === "compat" ? {} : false,
        },
    };
};