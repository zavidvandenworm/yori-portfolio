<script>
import Navbar from "../../components/Navbar.svelte";
import {goto} from "$app/navigation";

import {projects} from "$lib/data.js";

</script>

<div class="page-container">
    <Navbar />
    <h1>Projects</h1>
    <div class="projects">
        {#each projects as project}
            <a class="project" href="project/{project.id}">
                <img alt="project" src="{project.cover}" class="cover">
                <span class="name">{project.name}</span>
                <span class="description">{project.description}</span>
            </a>
        {/each}
    </div>

</div>
