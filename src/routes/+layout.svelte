<script lang="ts" context="module">
    import { page } from '$app/stores';
    import '../app.css';
    import Globals from '$components/Globals.svelte';
    import Icon from '$components/Icon.svelte';
    import { config } from '$lib/config';
    import { base } from '$app/paths';

    export interface NavLink {
        name: string;
        url: string;
        icon: string;
    }
</script>

<script lang="ts">
    const showNavBar = (config.navLinks ?? []).length > 1;
</script>

<!-- Navbar (Desktop) -->
{#if showNavBar}
    <nav
        class="sticky top-0 z-nav flex h-nav w-full bg-secondary-dark bg-opacity-70 text-text-dark drop-shadow-md backdrop-blur max-sm:hidden"
    >
        <ul class="flex h-full items-center">
            <li>
                <a href="{base}/" class="p-2 hover:text-secondary">Equi.rocks</a>
            </li>
            {#each config.navLinks as navItem}
                <li>
                    <a
                        href={navItem.url}
                        class={'p-2 hover:text-secondary ' +
                            ($page.url.pathname == navItem.url ? 'text-secondary' : '')}
                    >
                        {navItem.name}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
{/if}

<!-- Content -->
<main class="flex flex-grow flex-col">
    <slot />
</main>

<!-- Footer -->
<footer class="flex h-footer w-full items-center justify-center bg-secondary-dark p-5">
    <div class="p-2 {showNavBar ? 'text-right' : 'text-center'}">
        <p><a href="{base}/" class=" hover:text-secondary">equi.rocks</a></p>
        <p class="text-xs italic opacity-70">
            A web page by Equinox the gryph, ©{new Date().getFullYear()}
        </p>
    </div>
    {#if showNavBar}
        <ul class="right border-l-[1px] border-l-secondary">
            {#each config.navLinks as navItem}
                <li>
                    <a href={navItem.url} class="p-2 hover:text-secondary">{navItem.name}</a>
                </li>
            {/each}
        </ul>
    {/if}
</footer>

<!-- Navbar (Mobile) -->
{#if showNavBar}
    <nav
        class="sticky bottom-0 z-nav flex h-navMobile w-full items-center bg-secondary-dark bg-opacity-70 text-text-dark drop-shadow-md backdrop-blur sm:hidden"
    >
        {#each config.navLinks as navItem}
            <a
                href={navItem.url}
                class={'flex flex-grow flex-col items-center justify-center hover:text-secondary ' +
                    ($page.url.pathname == navItem.url ? 'text-secondary' : '')}
            >
                <Icon path={navItem.icon} />
                {navItem.name}
            </a>
        {/each}
    </nav>
{/if}

<!-- Global components -->
<Globals />
