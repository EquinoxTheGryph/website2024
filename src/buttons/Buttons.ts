export interface Button {
    url?: string;
    img: URL;
}

//prettier-ignore
export const buttons: Button[] = [
    { img: new URL('./files/hexaitos.png', import.meta.url), url: 'https://hexaitos.com' },
    { img: new URL('./files/soatok.png', import.meta.url), url: 'https://soatok.blog' },
    { img: new URL('./files/therian.png', import.meta.url) },
    { img: new URL('./files/vinesauce.png', import.meta.url), url: 'https://www.twitch.tv/vinesauce' },
    { img: new URL('./files/volpeon.svg', import.meta.url), url: 'https://volpeon.ink' },
    { img: new URL('./files/xenia_trans.gif', import.meta.url), url: 'https://www.linux.org' }
];
