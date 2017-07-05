<template>
  <section class="social">
    <div class="container">
      <div class="row justify-content-center sr-fadeInDown delay" id="sky-quote">
        <div class="col-lg-9 col-md-12">
          <block-quote class="bordered" title="Följ oss på sociala medier" body="Vill du ha full koll? Följ Ownit på sociala medier! Där håller vi dig uppdaterad med både sådant som händer just nu och allt nytt som händer den närmaste framtiden."/>
          <div class="social-links">
            <a href="https://www.facebook.com/OwnitBroadband/" target="_blank">
              <div class="social-icon" id="facebook"></div>
            </a>
            <a href="https://www.instagram.com/ownit_broadband/" target="_blank">
              <div class="social-icon" id="instagram"></div>
            </a>
          </div>
        </div>
      </div>
      <div class="cloud-container">
        <div class="row">

          <div class="cloud col-md-6 cloud-1 sr-moveRightSlow">
            <div class="cloud--post sr-fadeInDown delay-2x">
              <a href="#" target="_blank">
                <div class="image"></div>
              </a>
              <div class="stats">
                <span class="likes"></span>
                <span class="comments"></span>
              </div>
              <div class="description"></div>
            </div>
          </div>

          <div class="cloud col-md-6 cloud-2 sr-moveLeftSlow">
            <div class="cloud--post last sr-fadeInDown delay-2x">
              <a href="#" target="_blank">
                <div class="image"></div>
              </a>
              <div class="stats">
                <span class="likes"></span>
                <span class="comments"></span>
              </div>
              <div class="description"></div>
            </div>
          </div>

        </div>
      </div>
      <info-slider/>
    </div>
  </section>
</template>

<style lang="scss">
  @import "../../node_modules/bootstrap/scss/variables";
  @import "../../node_modules/bootstrap/scss/mixins/breakpoints";

  section.social{
    background: #092129;
    background: -moz-linear-gradient(top, #092129 0%, #1b7a9c 65%, #2bb3c2 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, #092129), color-stop(65%, #1b7a9c), color-stop(100%, #2bb3c2));
    background: -webkit-linear-gradient(top, #092129 0%, #1b7a9c 65%, #2bb3c2 100%);
    background: -o-linear-gradient(top, #092129 0%, #1b7a9c 65%, #2bb3c2 100%);
    background: -ms-linear-gradient(top, #092129 0%, #1b7a9c 65%, #2bb3c2 100%);
    background: linear-gradient(to bottom, #092129 0%, #1b7a9c 65%, #2bb3c2 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#092129', endColorstr='#2bb3c2', GradientType=0 );

    #sky-quote{
      margin-top: 10%;
    }

    .social-links{
      > a > .social-icon{
        display: inline-block;
        margin: 0 1rem 1rem;
        background: no-repeat center center;
        background-size: contain;
        height: 50px;
        width: 50px;
        transition: box-shadow 0.3s;
        cursor: pointer;
        border-radius: 25px;

        &:hover{
          box-shadow: rgba(247, 198, 0, 0.79) 0 0 0 3px;
        }

        &#facebook{
          background-image: url('../assets/svg/facebook.svg');
        }
        &#instagram{
          background-image: url('../assets/svg/instagram.svg');
        }
      }
    }

    .cloud-container{
      width: 100%;
      overflow: hidden;
      margin-top: 2rem;
      margin-bottom: 4rem;

      .cloud{
        background: no-repeat center top;
        background-size: calc(100% - 30px);
        height: 500px;
        margin-bottom: 2rem;

        &.cloud-1{
          background-image: url('../assets/cloud-2.svg');

          > .cloud--post {
            margin-top: -5rem;
          }
        }

        &.cloud-2{
          background-image: url('../assets/cloud-1.svg');
        }

        .cloud--post{
          max-width: 220px;
          margin: -3rem auto 0;

          > a > .image{
            margin: 230px auto 1rem;
            background: no-repeat center top;
            background-size: cover;
            height: 220px;
            border: solid white 0.25rem;
            border-radius: 10px;
          }

          .stats{
            color: #5bc0de;

            > span.likes{
              position: relative;
              right: 10%;
              background: url('../assets/svg/like-heart.svg') no-repeat 0 center;
              background-size: 1.3rem;
              padding-left: 2rem;
            }

            > span.comments{
              position: relative;
              left: 10%;
              background: url('../assets/svg/speech-bubble.svg') no-repeat 0 center;
              background-size: 1.3rem;
              padding-left: 2rem;
            }
          }
        }
      }

      @include media-breakpoint-up(sm){
        .cloud{
          > .cloud--post {
            margin-top: -2rem;
          }

          &.cloud-2{
            > .cloud--post{
              margin-top: -2rem;
            }
          }
        }
      }

      @include media-breakpoint-up(md){
        .cloud{
          background-size: calc(100% - 30px);

          > .cloud--post {
            // margin-top: -2rem;
          }

          &.cloud-2{
            margin-top: 150px;

            > .cloud--post{
              margin-top: -4rem;
            }
          }
        }
      }

      @include media-breakpoint-up(lg){
        .cloud{
          background-size: calc(100% - 30px);

          > .cloud--post {
            margin: 0rem auto 0;
          }

          &.cloud-2{
            > .cloud--post{
              margin-top: -2rem;
            }
          }
        }
      }
    }
  }
</style>

<script>
  import BlockQuote from './BlockQuote'
  import InfoSlider from './InfoSlider'
  import $ from 'jquery'

  export default {
    name: 'social',
    data () {
      return {}
    },
    components: {
      BlockQuote,
      InfoSlider
    },
    methods: {},
    mounted () {
      let feedUrl = 'https://api.instagram.com/v1/users/4189406095/media/recent/?access_token=5657288245.4a2f028.46d3b1b8bd314487bc78e85e22aafad1&count=2'

      const $clouds = $('.cloud')

      $.ajax({
        url: feedUrl,
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        success: (response) => {
          for (let i = 0; i < ($clouds.length); i++) {
            let $post = $($clouds[i]).find('.cloud--post')
            let $postImage = $post.find('.image')

            $postImage.css('background-image', 'url(' + response.data[i].images.standard_resolution.url + ')')
            $postImage.attr('title', response.data[i].caption.text)
            $post.find('a').attr('href', response.data[i].link)
            $post.find('.stats > span.likes').html(response.data[i].likes.count)
            $post.find('.stats > span.comments').html(response.data[i].comments.count)
          }
        },
        error: (e) => {
          console.log('Instagram request failed: ', e)
        }
      })
    }
  }
</script>
