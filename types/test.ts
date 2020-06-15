import * as MagicEye from 'magic-eye';

class TextDepthMapper extends MagicEye.DepthMapper {
    constructor(text: string) {
        super();
    }

    make(width: number, height: number): number[][] {
        const ret: number[][] = [[]];
        return ret;
    }
}

const textDepthMapper = new TextDepthMapper('Text');
const options: MagicEye.Options = {
    el: null,
    width: 1024,
    height: 600,
    depthMap: null,
    depthMapper: textDepthMapper,
    imageType: 'png',
    colors: [
        [255, 255, 255, 255],
        [0, 0, 0, 255]
    ]
};

MagicEye.render(options);