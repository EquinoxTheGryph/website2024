<script lang="ts">
    import CharacterCard from '$components/CharacterCard.svelte';
    import { config } from '$lib/config';
</script>

<article class="flex flex-col items-center p-10">
    <h1 class="c-text">My Characters</h1>
    <CharacterCard image={config.images.charEquinox} />
    <CharacterCard image={config.images.charSolstice} flip />
    <CharacterCard image={config.images.charRask} />
    <CharacterCard image={config.images.charTakora} flip />
    <CharacterCard image={config.images.charAsterion} />
</article>
