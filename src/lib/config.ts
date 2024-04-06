import type { UserLink } from '$components/UserLinkView.svelte';
import { mdiBullhorn, mdiCamera, mdiGithub, mdiHome, mdiImageMultiple, mdiMastodon } from '@mdi/js';
import type { NavLink } from '../routes/+layout.svelte';

export const config = {
    openGraph: {
        url: 'https://equi.rocks',
        name: 'equi.rocks',
        twitterUser: undefined,
        title: "Equinox's Website",
        description: 'Find more information about me here!'
    },
    title: 'Equinox the Gryphon',
    description: 'Programmer and sometimes an artist',
    age: 24,
    pronouns: 'He/Him',
    nationality: 'Dutch',
    relMe: 'https://squawk.social/@Equinox',
    userLinks: [
        {
            url: 'https://squawk.social/@Equinox',
            title: 'Social Media',
            content: 'Mastodon',
            icon: mdiMastodon
        },
        {
            url: 'https://www.furaffinity.net/user/aphelion1',
            title: 'Gallery',
            content: 'FurAffinity',
            icon: mdiImageMultiple
        },
        {
            url: 'https://github.com/EquinoxTheGryph',
            title: 'Source Code',
            content: 'GitHub',
            icon: mdiGithub
        },
        {
            url: 'https://t.me/ArtinoxStudios',
            title: 'Announcements',
            content: 'Telegram Channel',
            icon: mdiBullhorn
        },
        {
            url: 'https://t.me/EquinoxSuitPhotos',
            title: 'Fursuiting Photos',
            content: 'Telegram Channel',
            icon: mdiCamera
        }
    ] satisfies UserLink[],
    images: {
        icon: {
            alt: 'A headshot drawing of Equinox The Gryphon',
            src: new URL('/static/images/icon.png', import.meta.url).href
        }
    } satisfies Record<string, { src: string; alt: string }>,
    navLinks: [
        {
            name: 'Home',
            url: '/',
            icon: mdiHome
        }
        // {
        //     name: 'Gallery',
        //     url: '/gallery',
        //     icon: mdiViewGallery
        // },
        // {
        //     name: 'Stuff',
        //     url: '/extras',
        //     icon: mdiHammerScrewdriver
        // },
        // {
        //     name: 'About',
        //     url: '/about',
        //     icon: mdiInformation
        // }
    ] satisfies NavLink[]
} as const;
