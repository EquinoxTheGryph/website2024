<script>
    import Button88x31 from '$components/Button88x31.svelte';

    export let data;
</script>

<article class="flex flex-col items-center p-10">
    <h1 class="c-text">Buttons!</h1>
    <p class="c-text text-center">
        Some random buttons I have collected over a period of time. <br />
        These are not in any particular order.
    </p>
    <div class="m-5 flex max-w-[40em] flex-wrap justify-center gap-2">
        {#each data.buttons as button}
            <Button88x31 value={button} />
        {/each}
    </div>

    <h2 class="c-text">Feel free to use mine!</h2>
    <p class="c-text mb-3 text-center">
        Featuring various art pieces found on my <a
            href="https://www.furaffinity.net/gallery/aphelion1"
        >
            FA Gallery!
        </a>
    </p>
    <Button88x31
        value={{
            url: '/images/EquiRocks88x31.gif',
            img: '/images/EquiRocks88x31.gif'
        }}
    />
</article>
