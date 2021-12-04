<!-- <script>
  export let items;
  export let activeItem;
</script>

//Main
<ul class="nav nav-pills">
    {#each items as item}
      <li class="nav-item" on:click={()=> dispatch('tabChange', item)}>
        <div class="nav-link" class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>

<style>
    .active{
        color:red;
    }
</style>



//App
<div role="main">
  {#if activeItem === 'Home'}
      <Main/>
  {:else if activeItem === 'Blog'}
      <Blog/>
  {:else if activeItem === 'Company'}
      <Company/>
  {:else if activeItem === 'About'}
      <About/>
  {/if}
  <Home id= "home"/>
  <Blog id= "blog"/>
  <Company id= "company"/>
  <About id= "about"/>
</div> -->