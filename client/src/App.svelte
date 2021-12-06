<script>
import Footer from "./components/partials/footer.svelte";
import Header from "./components/partials/header.svelte";
import Main from "./components/layouts/main.svelte";
import LibLoader from './components/lib/libLoader.svelte';
import Login from "./components/layouts/authentication/login.svelte";

//header
let items = ['Home','About','Blog','Company'];
let activeItem = 'Home';
const tabChange = (e) => {
    activeItem = e.detail;
}

// start
let run = 'Login';

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
    <Header {activeItem} {items} {run} on:tabChange={tabChange}/>
</on-headers>

<Main {activeItem} {items} {run}/>

<footer class="pt-3 my-4 text-muted border-top">
    <Footer />
</footer>
