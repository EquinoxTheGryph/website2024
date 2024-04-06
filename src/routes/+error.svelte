<script lang="ts">
    import { page } from '$app/stores';
    import { config } from '$lib/config';
    import RichPreviewInfo from '$components/RichPreviewInfo.svelte';

    export const prerender = false;

    const image = config.images.error;
</script>

<RichPreviewInfo title={`Page error ${$page.status}: ${$page.error?.message}`} />

<main class="flex flex-col items-center p-10">
    <img src={image.src} alt={image.alt} class="cursor-grab px-2 drop-shadow-md" />
    <section class="p-2 text-center">
        <h1>{$page.status}</h1>
        <h2 class="opacity-70">{$page.error?.message}</h2>
        <em>
            {#if image.artist}
                Art by
                {#if typeof image.artist != 'string'}
                    <a class="underline" href={image.artist.url}>{image.artist.name}</a>
                {:else}
                    {image.artist}
                {/if}
            {/if}
        </em>
    </section>
    <button on:click={() => window.history.back()}>Go Back</button>
</main>
