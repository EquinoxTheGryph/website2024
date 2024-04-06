import { base } from '$app/paths';
import type { ArtData } from '$components/Art.svelte';
import type { UserLink } from '$components/UserLinkView.svelte';
import {
    mdiAccount,
    mdiBullhorn,
    mdiCamera,
    mdiGithub,
    mdiHome,
    mdiImageMultiple,
    mdiMastodon
} from '@mdi/js';
import type { NavLink } from '../routes/+layout.svelte';

const image = (path: string) => `${base}/images/${path}`;

const images = {
    icon: {
        alt: 'A headshot drawing of Equinox The Gryphon',
        src: image(`icon.png`)
    },
    error: {
        alt: 'Equinox the gryphon sitting with his paws tucked. He looks slightly judgemental.',
        src: image(`loaf.png`),
        artist: {
            name: 'Blajn',
            url: 'https://twitter.com/Blajnart'
        }
    },

    // Art
    charEquinox: {
        src: image('art/Funa-Equinox-Fullbody.png'),
        alt: '',
        artist: {
            name: 'Funa',
            url: 'https://twitter.com/funa_des'
        },
        url: 'https://www.furaffinity.net/view/41715048/',
        title: 'Equinox',
        subtitle: 'Mountain lion / Red tailed hawk gryphon || He / Him',
        description:
            'Equinox is an adventurous gryphon who loves tinkering and exploring the world around him. ' +
            'He lives in the capital city of the mainland as an electromechanical engineer, ' +
            'often working on robotics similar to the ones found in the real world.'
    },
    charSolstice: {
        src: image('art/Funa-Solstice-and-Andromeda-Scene-edited.png'),
        alt: '',
        artist: {
            name: 'Funa',
            url: 'https://twitter.com/funa_des'
        },
        url: 'https://www.furaffinity.net/view/51111396/',
        title: 'Solstice',
        subtitle: 'Snow leopard / Red tailed hawk gryphon || She / Her',
        description:
            'Solstice is a gryphon who loves to go to various high vantage points like mountains. ' +
            'Her thick snow-leopard fur keeps her warm in even the coldest environments. ' +
            'In her daily life, she works as an environmental scientist in the northern lands.'
    },
    charRask: {
        src: image('art/Fulpelt-Rask-YCH.png'),
        alt: '',
        artist: {
            name: 'Fulpelt',
            url: 'https://www.furaffinity.net/user/fulpelt'
        },
        url: 'https://www.furaffinity.net/view/43444504/',
        title: 'Rask',
        subtitle: "Mountain lion / Steller's jay inspired Hawk gryphon || He / Him",
        description:
            'After being banished from the capital city in the past for reasons ' +
            'related to his unique condition, Rask now lives the deep forest as a leader of his own tribe. ' +
            'Thanks to his pack-mates, He has learned to control his aggressive nocturnal outbursts. ' +
            'He still thinks back to his past and desires to get his reputation back up.'
    },
    charTakora: {
        src: image('art/Blajn-Takora-Refsheet-v2.0-Clothed.png'),
        alt: "Takora's Refsheet. Takora is a red bearded vulture phoenix gryphon. They look quite stern.",
        artist: {
            name: 'Blajn',
            url: 'https://twitter.com/Blajnart'
        },
        url: 'https://www.furaffinity.net/view/47031201/',
        title: 'Takora',
        subtitle: 'Lion / Bearded vulture / Phoenix gryphon || They / Them',
        description:
            'As with any phoenixes, Takora, being born from the sun, has the unique ability to be reborn after death. ' +
            'Only thing is, they lose almost every bit of their memories from their past life. Almost. ' +
            "Takora embraces this fact and has made their own library full of knowledge they've " +
            'written by themselves to rediscover when the time comes. ' +
            'They are somewhat preoccupied, but is very friendly regardless.'
    },
    charAsterion: {
        src: image('art/WIP.png'),
        alt: 'Work in progress',
        // artist: {
        //     name: 'NONE',
        //     url: 'NONE'
        // },
        url: 'https://www.youtube.com/watch?v=RqCvd7TJxnA',
        title: 'Asterion',
        subtitle: 'Draft horse / Blue jay hippogryph || He / Him',
        description:
            '(WIP) Asterion is a friendly (but somewhat shy) and very musically inspired ' +
            'hippogryph who works as a royal bard. He specializes in singing and can play ' +
            'a variety of instruments, primarily a lute.'
    }
} satisfies Record<string, ArtData>;

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
    images,
    navLinks: [
        {
            name: 'Home',
            url: `${base}/`,
            icon: mdiHome
        },
        {
            name: 'Characters',
            url: `${base}/characters`,
            icon: mdiAccount
        }
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
