<template>
  <section class="social">
    <div class="container-fluid">
      <div id="skyQuote">
        <div class="row justify-content-center sr-fadeInDown delay">
          <div class="col-lg-8 col-xs-12">
            <block-quote title="Lorem ipsum dolor sit amet" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper lacinia dolor eu fringilla. Aenean sodales libero dolor, et sodales massa aliquet id. Donec tempor blandit massa sed pulvinar." width="12"></block-quote>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="cloud-container">
          <div class="cloud cloud-1 sr-moveRightSlow"></div>
          <div class="cloud cloud-2 sr-moveLeftSlow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  section.social{
    min-height: 2000px;
    background: #092129;
    background: -moz-linear-gradient(top, #092129 0%, #1b7a9c 65%, #2bb3c2 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, #092129), color-stop(65%, #1b7a9c), color-stop(100%, #2bb3c2));
    background: -webkit-linear-gradient(top, #092129 0%, #1b7a9c 65%, #2bb3c2 100%);
    background: -o-linear-gradient(top, #092129 0%, #1b7a9c 65%, #2bb3c2 100%);
    background: -ms-linear-gradient(top, #092129 0%, #1b7a9c 65%, #2bb3c2 100%);
    background: linear-gradient(to bottom, #092129 0%, #1b7a9c 65%, #2bb3c2 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#092129', endColorstr='#2bb3c2', GradientType=0 );

    #skyQuote{
      margin-top: 20%;
    }

    .cloud-container{
      width: 100%;
      overflow: hidden;
      margin-top: 10rem;

      .cloud{
        background-size: contain;
        background: no-repeat center center;
        height: 200px;
        width: 100%;
        position: relative;
        margin-bottom: 2rem;

        &.cloud-1{
          background-image: url('../assets/cloud-2.svg');
          background-position: -80%;
      }

        &.cloud-2{
          background-image: url('../assets/cloud-1.svg');
          background-position: 150%;
        }
      }

      @media screen and (min-width: 768px){
        .cloud.cloud-1{
          background-position: -10%;
        }
        .cloud.cloud-2{
          background-position: 110%;
        }
      }

      @media screen and (min-width: 1200px){
        .cloud.cloud-1{
          background-position: 10%;
        }
        .cloud.cloud-2{
          background-position: 90%;
        }
      }

    }

  }

</style>

<script>
  import BlockQuote from './BlockQuote'

  export default {
    name: 'usp-slider',
    data () {
      return {}
    },
    components: {
      BlockQuote
    },
    methods: {}
  }
</script>
