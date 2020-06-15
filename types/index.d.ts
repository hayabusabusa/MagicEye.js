export interface Options {
    el: HTMLElement | null,
    width: number,
    height: number,
    depthMap: number[][] | null,
    depthMapper: DepthMapper | null,
    imageType: string | null,
    colors: number[][] | null
}

export class DepthMapper {}

export function render(options: Options): void

export class TextDepthMapper extends DepthMapper {
    constructor(text: string)
}