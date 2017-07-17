<template>
  <section class="ground">
    <div class="ground-top--city"></div>

    <div class="ground-top--wrapper">

      <div class="ground-top--grass"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6 col-xs-6">
            <div class="row">
              <div class="col-lg-3">
                <div class="ground-top--house small mini-bounce-jump infinite animated" id="orange"></div>
              </div>
              <div class="col-lg-3 col-md-4 offset-md-3 offset-lg-0 col-xs-6">
                <div class="ground-top--house small mini-bounce-jump infinite animated" id="ownit"></div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="ground-top--house small mini-bounce-jump infinite animated" id="red"></div>
              </div>
              <div class="col-lg-3">
                <div class="ground-top--house small mini-bounce-jump infinite animated" id="brown"></div>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-xs-6">
            <div class="row justify-content-center">
              <div class="col-md-5 col-lg-4 col-xs-6">
                <div class="ground-top--house mini-bounce-jump infinite animated" id="apartment"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-7">
          <address-search class="sr-fadeInUp"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import "../../node_modules/bootstrap/scss/variables";
  @import "../../node_modules/bootstrap/scss/mixins/breakpoints";

  $city-offset: 280px;

  section.ground{
    background: #97c668;
    background: -moz-linear-gradient(top, #97c668 0%, #6a8e43 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, #97c668), color-stop(100%, #6a8e43));
    background: -webkit-linear-gradient(top, #97c668 0%, #6a8e43 100%);
    background: -o-linear-gradient(top, #97c668 0%, #6a8e43 100%);
    background: -ms-linear-gradient(top, #97c668 0%, #6a8e43 100%);
    background: linear-gradient(to bottom, #97c668 0%, #6a8e43 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#97c668', endColorstr='#6a8e43', GradientType=0 );
    position: relative;
    width: 100%;
    padding-bottom: 5em;

    .ground--offset{
      top: -$city-offset * 0.8;
    }

    .ground-top--city{
      background: url('../assets/svg/City skyline.svg') no-repeat left bottom;
      background-size: auto 100%;
      position: absolute;
      width: 50%;
      height: 250px;
      transform: translate(100%, -135%);
    }

    @include media-breakpoint-up(md) {
      .ground-top--city {
        background-position: right bottom;
        background-size: contain;
        position: absolute;
        width: 50%;
        height: 220px;
        transform: translate(100%, -135%);
      }
    }

    .ground-top--wrapper{
      top: -$city-offset;
      height: $city-offset;
      position: relative;
      display: block;
      width: 100%;
      overflow: hidden;
      z-index: 2;

      .ground-top--house{
        background: no-repeat center bottom;
        background-size: 80%;
        width: 100%;

        &.small{
          height: 260px;
        }

        &#ownit{
          background-image: url('../assets/svg/Ownit.svg');
          animation-delay: (0.2s);
        }
        &#red{
          background-image: url('../assets/svg/Red.svg');
          animation-delay: (0.4s);
          display: none;
        }
        &#orange{
          background-image: url('../assets/svg/Orange.svg');
          display: none;
        }
        &#brown{
          background-image: url('../assets/svg/Brown.svg');
          animation-delay: (0.6s);
          display: none;
        }
        &#apartment{
          background-image: url('../assets/svg/Apartment.svg');
          animation-delay: (0.8s);
          height: 280px;
          display: none;
        }
      }
      @include media-breakpoint-up(sm){
        .ground-top--house{
          background-size: contain;

          &.small{
            width: 100%;
            margin-left: auto;
          }

          &#red{
            display: block;
          }

          &#apartment{
            display: block;
          }
        }
      }

      @include media-breakpoint-up(lg){
        .ground-top--house{
          width: 80%;

          &#brown, &#orange{
            display: block;
          }

          &#apartment{
            height: $city-offset - 20px;
          }
        }
      }

      .ground-top--grass{
        width: 180%;
        height: 75%;
        border-top-left-radius: 100%;
        border-top-right-radius: 100%;
        background: #97c668;
        position : absolute;
        left: 50%;
        top: 100%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }

      @include media-breakpoint-up(lg){
        .ground-top--grass{
          width: 150%;
          top: 100%;
        }
      }
    }
  }
</style>

<script>
  import BlockQuote from './BlockQuote'
  import AddressSearch from './AddressSearch'

  export default {
    name: 'ground',
    data () {
      return {}
    },
    components: {
      BlockQuote,
      AddressSearch
    }
  }
</script>
