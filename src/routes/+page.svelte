<script lang="ts">
    import RichPreviewInfo from '$components/RichPreviewInfo.svelte';
    import UserLinkView from '$components/UserLinkView.svelte';
    import { config } from '$lib/config';
</script>

<RichPreviewInfo
    title="Equinox's About Page"
    description="Links to some of my other accounts can be found here"
/>

<article class="flex flex-col items-center p-10">
    <section class="flex flex-col items-center p-2 text-center">
        <img
            src={config.images.icon.src}
            alt={config.images.icon.alt}
            class="mb-4 h-60 w-60 rounded-full bg-own-600 drop-shadow-lg"
        />
        <h1 class="c-text">{config.title}</h1>
        <p class="opacity-80">{config.description}</p>
        <p class="opacity-80">{config.age}, {config.pronouns}, {config.nationality}</p>
    </section>

    {#each config.userLinks as userLink}
        <UserLinkView {userLink} />
    {/each}
</article>

<!-- Link verification -->
<!-- svelte-ignore a11y-missing-content -->
<a rel="me" href={config.relMe} class="invisible" />
