export interface Options {
    el: HTMLElement | null,
    width: number,
    height: number,
    depthMap: number[][] | null,
    depthMapper: DepthMapper | null,
    imageType: string | null,
    colors: number[][] | null
}

export class DepthMapper {
    autoResize: boolean;

    constructor()

    public make(width: number, height: number): number[][]
}

export function render(options: Options): void