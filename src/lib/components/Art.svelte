<script lang="ts" context="module">
    export interface ArtData {
        src: string;
        alt?: string;
        artist?: string | { url: string; name: string };
        url?: string;
        title?: string;
        description?: string;
        subtitle?: string;
    }
</script>

<script lang="ts">
    export let image: ArtData;
    export let width: string | number = '100%';
    export let height: string | number = '100%';
</script>

{#if image.url}
    <a class="contents" href={image.url}>
        <img
            class="object-cover"
            src={image.src}
            alt={image.alt ?? ''}
            title={image.title ?? ''}
            style:width
            style:height
        />
    </a>
{:else}
    <img
        class="object-cover"
        src={image.src}
        alt={image.alt ?? ''}
        title={image.title ?? ''}
        style:width
        style:height
    />
{/if}
