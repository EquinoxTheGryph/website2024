<script lang="ts">
    export let path: string;
    export let size = 1;
    export let color: Nullable<string> = null;
    export let title = '';

    // size
    if (Number(size)) size = Number(size);

    const getStyles = (size: number) => {
        const styles = [];

        if (size !== null) {
            const width = typeof size === 'string' ? size : `${size * 1.5}rem`;
            styles.push(['width', width]);
            styles.push(['height', width]);
        }

        styles.push(['fill', color !== null ? color : 'currentColor']);

        return styles.reduce((cur, item) => {
            return `${cur} ${item[0]}:${item[1]};`;
        }, '');
    };

    $: style = getStyles(size);
</script>

<svg viewBox="0 0 24 24" {style}>
    {#if title}<title>{title}</title>{/if}
    <path d={path}></path>
</svg>

<style>
    svg {
        vertical-align: middle;
    }
</style>
