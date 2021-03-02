# Sumi Style

[![License: OEL](https://img.shields.io/badge/License-OEL-green.svg?style=flat)](https://git.omnifi.foundation/oel)

_Sumi Style_ is the styling (CSS) package for the Sumi web project. 

## Installing

To install the style library use [Node Package Manager](https://npmjs.org).

```
npm install "@omnifi/sumi-style" --save-dev
```

## Usage

To use the project either reference the full library:

```html
<link
    rel="stylesheet"
    href="node_modules/sumi-style/sumi.min.css"
    type="text/css"
  />
```

Or reference the module you wish to use (note that the base module is vital to the library working effectively). 

```html
<!-- Add the base style module -->
<link
    rel="stylesheet"
    href="node_modules/sumi-style/base.min.css"
    type="text/css"
  />
<!-- Add handheld styling for small touch devices -->
<link
    rel="stylesheet"
    href="node_modules/sumi-style/handheld.min.css"
    media="screen and (max-width: 960px)" 
    type="text/css"
  />
```

> **Note:** This enables media queries to be used selectively and can improve the performance of the styling library by optimizing the rendering pipeline in the browser.

## Building

To build the project you can use [Node Package Manager](https://npmjs.org). The following exampel cleans any existing artifacts and builds the development, production, and compatible versions of the CSS library. 

```
npm run clean && npm run build
```

## Developing

To get started in developing the project it's recommended to use the official [_Node_ Docker image](https://hub.docker.com/_/node/), as this will provide a consistent and reliable environment for developing and testing changes. It's the exact image the project uses as part of the continuous integration (CI) build pipeline.

To start with Docker you can use the following command-line statement.

```
docker run -it --name "sumi-node" -P -v $(pwd):/src node:14-alpine sh; docker rm "sumi-node"
```

> **Note:** The statement automatically removes the Docker image after use through the post-fixed `docker rm ...` command. If you want to keep the image, remove the post-fix statement and continue.

