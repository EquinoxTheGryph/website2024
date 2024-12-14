export interface Button {
    url?: string;
    img: string;
}

function _btn(img: string, url?: string) {
    return { img: '/images/buttons/' + img, url };
}

export const buttons: Button[] = [
    _btn('hexaitos.png', 'https://hexaitos.com'),
    _btn('soatok.png', 'https://soatok.blog'),
    _btn('therian.png'),
    _btn('vinesauce.png', 'https://www.twitch.tv/vinesauce'),
    _btn('volpeon.svg', 'https://volpeon.ink'),
    _btn('xenia_trans.gif', 'https://www.linux.org')
];
