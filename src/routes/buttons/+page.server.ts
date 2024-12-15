import { buttons } from '$lib/Buttons';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        buttons
    };
}) satisfies PageServerLoad;