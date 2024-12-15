import _linkData from '../../static/images/buttons/__links.json';

const imageModules = import.meta.glob(
    ['/static/images/buttons/*', '!/static/images/buttons/*.json'],
    {
        eager: true,
        import: 'default',
        query: '?url&no-inline'
    }
);

export interface Button {
    url?: string;
    img: string;
}

export const buttons: Button[] = Object.keys(imageModules).map((imageUrl) => {
    const _fileName = imageUrl.replace(/^.*\//g, '');
    const _url = _linkData[_fileName as keyof typeof _linkData];

    return {
        img: '/images/buttons/' + _fileName,
        ...(_url ? { url: _url } : {})
    };
});
