<script>
  import Router, {wrap,push} from "svelte-spa-router";

  import Home from "./components/client/home/Home.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Signup from "./components/client/auth/Signup.svelte";
  import Login from "./components/client/auth/Login.svelte";
  import Profile from "./components/client/auth/Profile.svelte";
  import Navbar from "./components/configs/Navbar.svelte";
  import Footer from "./components/configs/footer.svelte";
  import Lib from "./components/lib/libLoader.svelte";
  import About from "./components/client/about/About.svelte";
  import Loading from "./components/lib/Loading.svelte";
  import Game from "./components/client/main/Game.svelte";

  import { onMount } from "svelte";
  import axios from "axios";
  import { user } from "./stores";

  let loading = true;

  onMount(async() => {
    const {data} = await axios.get("api/auth/user");
    $user = data.user;
    loading = false;
  });

  const routes = {
    "/": wrap(Home, () => !$user),
    "/signup" : wrap(Signup, {reason:"authenticated"} , () => !$user),
    "/login" : wrap(Login, {reason:"authenticated"} , () => !$user),
    "/profile": wrap(Profile, {reason:"unauthenticated"}, ()=> $user),
    "/about": wrap(About, () => !$user),
    "/rungame": wrap(Game, () => !$user)
  };

  function  conditionsFailed(event) {
    const {reason} = event.detail.userData;
    switch (reason) {
      case "unauthenticated":
        return push("/login");
      case "authenticated":
        return push("/");
    }
  }
</script>

<Lib />

{#if loading}
  <div id="js-preloader" class="js-preloader">
    <Loading/>
  </div>
{:else}
<Navbar/>
<Router {routes} on:conditionsFailed={conditionsFailed} />
<Footer/>
{/if}
