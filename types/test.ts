import * as MagicEye from 'magic-eye';

const options: MagicEye.Options = {
    el: null,
    width: 1024,
    height: 600,
    depthMap: null,
    depthMapper: new MagicEye.TextDepthMapper('Text'),
    imageType: 'png',
    colors: [
        [255, 255, 255, 255],
        [0, 0, 0, 255]
    ]
};

MagicEye.render(options);