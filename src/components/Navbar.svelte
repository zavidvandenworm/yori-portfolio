<script>
    import { page } from '$app/stores';
</script>

<div class="navigation">
    <a href="/" class:active={$page.url.pathname==='/'}>Home</a>
    <a href="/projects" class:active={$page.url.pathname==='/projects'}>Projects</a>
    <a href="/contact" class:active={$page.url.pathname==='/contact'}>Contact</a>
</div>