<script lang="ts" context="module">
    import Icon from './Icon.svelte';
    export interface UserLink {
        url: string;
        title: string;
        content?: string;
        icon?: string;
    }
</script>

<script lang="ts">
    export let userLink: UserLink;
</script>

<div class="group flex w-80 items-center">
    <a
        on:click
        href={userLink.url}
        class="
            my-2
            flex
            w-full
            select-none
            rounded-full
            bg-secondary-dark
            p-2
            text-text-dark
            drop-shadow-lg
            transition-transform
            hover:scale-[1.025]
            hover:drop-shadow-sm
            active:translate-y-[2px]
        "
    >
        {#if userLink.icon}
            <span class="flex items-center px-1.5">
                <Icon path={userLink.icon} />
            </span>
        {/if}

        <section class="flex-grow text-center">
            <p>
                {userLink.title}
            </p>
            <p class="text-sm font-medium opacity-75">{userLink.content ?? ''}</p>
        </section>

        {#if userLink.icon}
            <span class="w-[24px] px-2" />
        {/if}
    </a>
</div>
