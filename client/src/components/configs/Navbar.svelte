<script>
  import axios from "axios";
  import { user, transactions } from "../../stores";
  import { push } from "svelte-spa-router";
  let isActive = false;
  async function logout() {
    await axios.post("/api/auth/logout");
    $user = null;
    $transactions = [];
    push("/");
    location.reload();
  }
</script>

<!-- ***** Header Area Start ***** -->
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
          <a href="index.html" class="logo">
            <img src="./images/HorizanL-nobg.svg" alt="Chain App Dev" />
          </a>
          <span
            class="nav"
            style="display: block;"
            class:is-active={isActive}
            on:click={() => (isActive = !isActive)}
            aria-expanded="false"
            aria-label="menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>
          <!-- ***** Logo End ***** -->
          <!-- ***** Menu Start ***** -->
          <ul class="nav">
            <li class="scroll-to-section">
              <a class="button active" href="/">Home</a>
            </li>
            <li class="scroll-to-section">
              <a class="button" href="/#/about">About</a>
            </li>
            <li>
              <div class="gradient-button">
                {#if $user}
                  <a class="buton is-primary-is-light fa fa-user" href="#/profile">
                    &nbsp;&nbsp;{$user.username}
                  </a>
                  <a
                    href="/#"
                    class="buton is-primary-is-light"
                    on:click={logout}>Log out</a
                  >
                  <a
                    href="#/rungame"
                    class="buton is-primary-is-light">Start</a
                  >
                {:else}
                  <a class="buton is-primary-is-light" href="#/login"> <i class="fa fa-sign-out" aria-hidden="true"></i> Login</a>
                {/if}
              </div>
            </li>
          </ul>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="menu-trigger" class:is-active={isActive}>
            <span>Menu</span>
          </a>
          <!-- ***** Menu End ***** -->
        </nav>
      </div>
    </div>
  </div>
</header>

<!-- ***** Header Area End ***** -->
<style>
  img {
    width: 165px;
  }
</style>
