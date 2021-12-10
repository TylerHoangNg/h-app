<script>
  import axios from "axios";
  import { user } from "../stores";
  import { push } from "svelte-spa-router";
  let oldPassword;
  let newPassword;

  let errorMessage;
  let successMessage;

  $: if (oldPassword) {
    errorMessage = null;
  }

  async function changePassword() {
    try {
      await axios.post("/api/auth/update-password", {
        oldPassword,
        oldPassword,
      });
      oldPassword = "";
    newPassword = "";
      successMessage = "Password was update correctly";
    } catch (error) {
      if (error.response.data.message === "IncorrectPasswordError") {
        oldPassword = "";
        newPassword = "";
        errorMessage = "Wrong old password";
      }
    }
  }
</script>

<div class="contaner">
  <div class="section">
    <h2 class="title">Change password</h2>
    <hr />
    {#if successMessage}
    <div class="notification is-success">{successMessage}</div>
    {/if}
    <form on:submit|preventDefault={changePassword}>
      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Old Password: </label>
        <div class="control">
          <input
            type="password"
            bind:value={oldPassword}
            class="input"
            required
            class:is-danger={errorMessage}
          />
        </div>
      </div>
      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">New Password: </label>
        <div class="control">
          <input
            type="password"
            bind:value={newPassword}
            class="input"
            required
            class:is-danger={errorMessage}
          />
          {#if errorMessage}
            <p class="help is-danger">{errorMessage}</p>
          {/if}
        </div>
      </div>
      <div class="control">
        <input type="submit" class="button is-info is-light" value="Submit" />
      </div>
    </form>
  </div>
</div>
