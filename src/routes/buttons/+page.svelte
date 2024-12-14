<script>
    import Button88x31 from '$components/Button88x31.svelte';
    import { buttons } from '../../buttons/Buttons';
</script>

<article class="flex flex-col items-center p-10">
    <h1 class="c-text">Buttons!</h1>
    <div class="m-5 flex max-w-[40em] flex-wrap justify-center gap-2">
        {#each buttons as button}
            <Button88x31 value={button} />
        {/each}
    </div>

    <h2 class="c-text">Feel free to use mine!</h2>
    <Button88x31
        value={{
            url: '/images/EquiRocks88x31.gif',
            img: new URL('/images/EquiRocks88x31.gif', import.meta.url)
        }}
    />
</article>
