<script lang="ts">
    import CharacterCard from '$components/CharacterCard.svelte';
    import Icon from '$components/Icon.svelte';
    import { config } from '$lib/config';
    import { mdiImageSearchOutline } from '@mdi/js';
</script>

<article class="flex flex-col items-center p-10">
    <h1 class="c-text">My Characters</h1>
    <p class="c-text text-center mb-4">
        Click on the <Icon path={mdiImageSearchOutline} class="inline" size="1em" title="Image Icon" /> to go to the character's
        reference sheet
    </p>
    <CharacterCard image={config.images.charEquinox} />
    <CharacterCard image={config.images.charSolstice} flip />
    <CharacterCard image={config.images.charRask} />
    <CharacterCard image={config.images.charTakora} flip />
    <CharacterCard image={config.images.charAsterion} />
</article>
