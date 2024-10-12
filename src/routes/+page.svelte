<script>
    let contentFromInput = '';
    import { tasks } from "$lib/stores.js";

    const addTask = () => {
        fetch("/api/tasks/add", {
            method: "POST",
            body: JSON.stringify({
                content: contentFromInput
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(json => {
            $tasks = [...$tasks, json.task];
        })
        .catch(err => console.log(err));
    }

    const getTasks = () => {
        fetch("/api/tasks", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(json => {
            $tasks = json.tasks;
        })
        .catch(err => console.log(err));
    }

    export let data;
    $tasks = data.tasks;
</script>

<main>
    <input bind:value={contentFromInput} type="text" placeholder="Enter task content">
    <button on:click={addTask}>Add</button>
    <div class="task-container">
        {#each $tasks as {content}}
            <div class="task">{content}</div>
        {/each}
    </div>
</main>

<style>
    main {
        padding: .5rem;
    }

    .task-container {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        margin-block: .5rem;
    }

    .task {
        background-color: black;
        border: 1px solid white;
        color: white;
        padding: .5rem;
    }
</style>