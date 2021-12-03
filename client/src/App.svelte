<script>
import Footer from "./views/partials/footer.svelte";
import Header from "./views/partials/header.svelte";
import Main from "./views/layouts/home/main.svelte";
import Blog from "./views/layouts/blog/index.svelte";
import Company from "./views/layouts/company/index.svelte";
import LibLoader from './views/lib/libLoader.svelte';

//header
let items = ['Home', 'Blog','Company'];
let activeItem = 'Home';
const tabChange = (e) => {
    activeItem = e.detail;
}

// start
let run = ['Run'];

// lib

</script>
<LibLoader/>
<!-- ***** Preloader Start ***** -->
  <div id="js-preloader" class="js-preloader">
    <div class="preloader-inner">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
<!-- ***** Preloader End ***** -->

<on-headers>
    <Header {activeItem} {items} on:tabChange={tabChange}/>
</on-headers>

<div role="main">
    {#if activeItem === 'Home'}
        <Main/>
    {:else if activeItem === 'Blog'}
        <Blog/>
    {:else if activeItem === 'Company'}
        <Company/>
    {/if}
</div>
<footer class="pt-3 my-4 text-muted border-top">
    <Footer />
</footer>
