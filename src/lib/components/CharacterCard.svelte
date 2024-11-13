<script lang="ts">
    import Art from './Art.svelte';
    import type { ArtData } from './Art.svelte';
    import ArtDescription from './ArtDescription.svelte';

    export let image: ArtData;
    export let flip = false;
</script>

<section
    class="flex max-w-[60ch] items-center {flip ? 'flex-col' : 'flex-col-reverse'} sm:flex-row"
>
    {#if flip}
        <div class="h-full flex-shrink-0">
            <Art {image} width="10em" height="10em" />
        </div>
        <div class="p-2">
            <ArtDescription {image} />
        </div>
        <!-- <div class=" w-60 h-full">
        </div>
        <div class="contents">
        </div> -->
    {:else}
        <div class="p-2">
            <ArtDescription {image} />
        </div>
        <div class="h-full flex-shrink-0">
            <Art {image} width="10em" height="10em" />
        </div>
        <!-- <div class="contents"></div>
        <div class="h-full  w-60"></div> -->
    {/if}
</section>
