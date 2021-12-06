<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;
  export let run;

  let srcimage = './images/HorizanL-nobg.svg';
</script>

<header
  class="header-area header-sticky wow slideInDown"
  data-wow-duration="0.75s"
  data-wow-delay="0s"
>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav class="main-nav">
          <!-- ***** Logo Start ***** -->
          <a href="index.html" class="logo logo-horizan">
            <picture>
              <source srcset="{srcimage}" type="image/svg+xml">
                <img type="image/png" src="{srcimage}" alt="" />
            </picture>
          </a>
          <!-- ***** Logo End ***** -->
          <!-- ***** Menu Start ***** -->
          <ul class="nav">
            {#each items as item}
              <li
                class="scroll-to-section"
                on:click={() => dispatch("tabChange", item)}
              >
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class:active={item === activeItem}>{item}</a>
              </li>
            {/each}
            <li
              class="scroll-to-section"
              on:click={() => dispatch("tabChange", run)}
            >
              <div class="border-first-button">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={() => dispatch("tabChange", run)}>{run}</a>
              </div>
            </li>
          </ul>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="menu-trigger">
            <span>Menu</span>
          </a>
          <!-- ***** Menu End ***** -->
        </nav>
      </div>
    </div>
  </div>
</header>

<style>
  .logo-horizan {
  display: block;
  height: auto;
  width: 13%;
}
</style>