<script>
  import axios from "axios";
  import { user } from "../../../stores";
  import { push } from "svelte-spa-router";
  let username;
  let password;
  let errorMessage;

  $: if (username) {
    errorMessage = null;
  }

  async function signup() {
    try {
      const { data } = await axios.post("/api/auth/sign-up", {
        username,
        password,
      });
      $user = data.user;
      push("/dashboard");
    } catch (error) {
      if (error.response.data.message === "UserExistsError") {
        username = "";
        password = "";
        errorMessage = "Username is already taken";
      }
    }
  }
</script>

<section class="vh-100" style="background-color: #fff;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-3 text-center">
            {#if errorMessage}
              <p class="help is-danger">{errorMessage}</p>
            {/if}
            <form on:submit|preventDefault={signup}>
              <h4 class="mt-1 mb-5 pb-1">Sign in</h4>
              <!-- the first and last names -->
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="firstname"
                      placeholder="First name"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="lastname"
                      placeholder="Last name"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="field">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    bind:value={username}
                    class="form-control"
                    placeholder="Username"
                    required
                    class:is-danger={errorMessage}
                  />
                </div>
              </div>
              <div class="field">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    bind:value={password}
                    class="form-control"
                    placeholder="Password"
                    required
                    class:is-danger={errorMessage}
                  />
                </div>
              </div>
              <!-- Checkbox -->
              <div class="form-check d-flex justify-content-start mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                />
                <label class="form-check-label" for="form1Example3">
                  &nbsp;&nbsp;Remember password
                </label>
              </div>
              <div class="control">
                <input
                  type="submit"
                  class="btn btn-primary btn-lg btn-block"
                  value="Login"
                />
              </div>
            </form>
            <p>
              Do you have an account ?
              <a href="#/login">Login in here</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f" />
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-google" />
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter" />
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-github" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
