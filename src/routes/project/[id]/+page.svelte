<script>
    import { page } from "$app/stores"
    import { onMount } from 'svelte';
    import Navbar from "../../../components/Navbar.svelte";

    import {projects} from "$lib/data.js";
    import {goto} from "$app/navigation";
    let id = $page.params.id;

    let project = projects.find(p => p.id === Number(id));

    onMount(() => {
        if (!project){
            goto("/projects")
        }
    })



</script>

<div class="page-container">
    <Navbar/>
    <a href="/projects" class="small-button">back</a>
    <div class="project-view">
        <img alt="cover" src="{project?.cover}" class="cover">
        <span class="name">{project?.name}</span>
        <p class="description">{project?.longdescription}</p>
        <div class="project-view-section">
            <span class="section-title">Features</span>
            {#each project?.features ?? [] as feature}
                <span class="feature">{feature}</span>
            {/each}
        </div>
        <div class="project-view-section">
            <span class="section-title">Contributions</span>
            {#each project?.contributions ?? [] as contribution}
                <span class="feature">{contribution.description}
                    {#if contribution.images.length !== 0}
                    <div class="contribution-images">
                        {#each contribution.images as image}
                            <img alt="contribution" class="contribution-image" src="{image}">
                        {/each}
                    </div>
                {/if}
                </span>

            {/each}
        </div>
    </div>
</div>