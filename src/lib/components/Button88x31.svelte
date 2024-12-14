<script lang="ts">
    import type { Button } from '../Buttons';

    export let value: Button;
</script>

{#if value.url}
    <a href={value.url} class="button">
        <img class="button-img" src={value.img} alt="" />
    </a>
{:else}
    <div class="button">
        <img class="button-img" src={value.img} alt="" />
    </div>
{/if}

<style lang="scss">
    .button {
        width: 88px;
        height: 31px;

        &:hover .button-img {
            image-rendering: pixelated;
            transform: scale(4);
        }
    }

    .button-img {
        transition: transform 250ms;
        pointer-events: none;
    }
</style>
