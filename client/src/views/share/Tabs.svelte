<script>
  export let items;
  export let activeItem;
</script>

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