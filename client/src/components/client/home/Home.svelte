<script>
  import axios from "axios";
  import { user, transactions } from "../../../stores";
  import { push } from "svelte-spa-router";
</script>
 
 
 <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div class="row">
                  <div class="col-lg-12">
                    <h2>S-Company</h2>
                    <h2>Pioneering company in simulated Work - Skills training</h2>
                    <p>-</p>
                  </div>
                  <div class="col-lg-12">
                    <div class="white-button first-button scroll-to-section">
                      {#if $user}
                        <a
                          href="#/rungame"
                          class="btn-first"
                          >&nbsp;&nbsp;Start&nbsp;&nbsp;</a
                        >
                      {:else}
                        <a class="btn-first" href="#/login"> <i class="fa fa-sign-out" aria-hidden="true"></i>&nbsp;&nbsp;Start&nbsp;&nbsp;</a>
                      {/if}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5-5">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <div
                  class="right-image wow fadeInRight image alignright"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                  data-mb="30"
                >
                <figure>
                  <video loop autoplay muted width="470" height="470">
                    <source src="/images/Animation-7-GIF.mp4" type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .row {
    justify-content: space-evenly;
  }
    .image video {
    border-radius: 50%;
    width: 100% !important;
    height: inherit !important;
  }

  .image.alignright:after {
    left: auto;
    right: 0;
  }

  figure {
    display: block;
    margin: 0;
  }

  .image figure {
    border: 1px solid var(--main-color);
    border-radius: 50%;
    padding: 20px;
  }

  .image:after {
    left: 0;
    content: "";
    position: absolute;
    width: 75px;
    height: 75px;
    opacity: 0.78;
    background-color: #007bff;
    border-radius: 50px;
    bottom: 60px;
    animation: 0.5s cubic-bezier(0.245, 0.325, 0.51, 1.305) 0s infinite
      alternate none running heartbeat;
    z-index: 1;
  }
  .col-lg-5-5{
    flex:0 0 auto;width:47%
  }
  .btn-first{
    width: 150%;
    text-align: center;
  }.white-button a {
    background-color: #fff;
    color: #4b8ef1 !important;
  }
  </style>