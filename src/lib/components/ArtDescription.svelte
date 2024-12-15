<script lang="ts">
    import { mdiImageSearchOutline } from '@mdi/js';
    import type { ArtData } from './Art.svelte';
    import Icon from './Icon.svelte';

    export let image: ArtData;
    export let align: 'left' | 'right' | 'center' = 'left';
</script>

<section class="prose max-w-full p-2 text-{align}">
    {#if image.title}
        <!-- prettier-ignore -->
        <h2 class="mb-1 mt-0 text-4xl">
            {image.title}{#if image.refUrl}&nbsp;<a
                    href={image.refUrl}
                    title="Link to this character's refsheet"
                >
                    <Icon path={mdiImageSearchOutline} class="inline" />
                </a>{/if}
        </h2>
    {/if}
    {#if image.subtitle}
        <p class="m-0">
            <em class="opacity-75">
                {image.subtitle}
            </em>
        </p>
    {/if}
    {#if image.artist}
        <p class="m-0">
            <em class="opacity-75">
                Art by
                {#if typeof image.artist != 'string'}
                    <a class="underline" href={image.artist.url}>{image.artist.name}</a>
                {:else}
                    {image.artist}
                {/if}
            </em>
        </p>
    {/if}
    {#if image.description}
        <p class="mb-2 mt-1">{image.description}</p>
    {/if}
</section>
