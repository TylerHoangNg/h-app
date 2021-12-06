<script>
  import Home from "./home/index.svelte";
  import Blog from "./blog/index.svelte";
  import Company from "./company/index.svelte";
  import About from "./about/index.svelte";
  import Login from "./authentication/login.svelte";

  export let activeItem;
  export let run;
</script>

<div role="main">
  {#if activeItem === "Home"}
    <Home/>
  {:else if activeItem === "Blog"}
    <Blog/>
  {:else if activeItem === "Company"}
    <Company/>
  {:else if activeItem === "About"}
    <About/>
  {/if}
</div>
{#if run === "Start"}
    <Login/>
{/if}