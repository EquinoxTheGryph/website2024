<script lang="ts">
    import { base } from '$app/paths';
    import { config } from '$lib/config';

    export let title: string = config.openGraph.title;
    export let description: string | null = config.openGraph.description;
    export let image: string = config.images.icon.src;
    export let imageAlt: string = config.images.icon.alt;
    export let renderTitle: boolean = false;
    export let url = config.openGraph.url;
    export let name = config.openGraph.name;

    const twitterSite = config.openGraph.twitterUser ?? config.openGraph.url;
    const twitterCreator = config.openGraph.twitterUser;

    // @see https://www.everywheremarketer.com/blog/ultimate-guide-to-social-meta-tags-open-graph-and-twitter-cards
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <link rel="shortcut icon" href="{base}/images/icon.png" type="image/x-icon" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={name} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={imageAlt} />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
    {#if twitterSite}
        <meta property="twitter:site" content={twitterSite} />
    {/if}
    {#if twitterCreator}
        <meta property="twitter:creator" content={twitterCreator} />
    {/if}
</svelte:head>

{#if renderTitle}
    <h1 class="c-text">{title}</h1>
    <h2 class="c-text">{description}</h2>
{/if}
