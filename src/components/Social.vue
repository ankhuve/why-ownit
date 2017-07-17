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

    .social-links{
      > a > .social-icon{
        display: inline-block;
        margin: 0 1em 1em;
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
      margin-top: 2em;
      margin-bottom: 4em;

      .cloud{
        background: no-repeat center top;
        background-size: calc(100% - 30px);
        height: 500px;
        margin-bottom: 2em;

        &.cloud-1{
          background-image: url('../assets/cloud-2.svg');

          > .cloud--post {
            margin-top: -5em;
          }
        }

        &.cloud-2{
          background-image: url('../assets/cloud-1.svg');
        }

        .cloud--post{
          max-width: 220px;
          margin: -3em auto 0;

          > a > .image{
            margin: 230px auto 1em;
            background: no-repeat center top;
            background-size: cover;
            height: 220px;
            border: solid white 0.25em;
            border-radius: 10px;
          }

          .stats{
            color: #5bc0de;

            > span{
              position: relative;
              background: no-repeat left center;
              background-size: contain;
              padding-left: 2em;

              &.likes{
                right: 10%;
                background-image: url('../assets/svg/like-heart.svg');
              }

              &.comments{
                left: 10%;
                background-image: url('../assets/svg/speech-bubble.svg');
              }
            }
          }
        }
      }

      @include media-breakpoint-up(sm){
        .cloud{
          > .cloud--post {
            margin-top: -2em;
          }

          &.cloud-2{
            > .cloud--post{
              margin-top: -2em;
            }
          }
        }
      }

      @include media-breakpoint-up(md){
        .cloud{
          background-size: calc(100% - 30px);

          > .cloud--post {
            // margin-top: -em;
          }

          &.cloud-2{
            margin-top: 150px;

            > .cloud--post{
              margin-top: -4em;
            }
          }
        }
      }

      @include media-breakpoint-up(lg){
        .cloud{
          background-size: calc(100% - 30px);

          > .cloud--post {
            margin: 0em auto 0;
          }

          &.cloud-2{
            > .cloud--post{
              margin-top: -2em;
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
      return {
        fbBaseUrl: 'https://graph.facebook.com/'
      }
    },
    components: {
      BlockQuote,
      InfoSlider
    },
    methods: {
      // Gets the latest posts from the Facebook page with the given id
      getPagePosts (pageId) {
        $.ajax({
          url: this.fbBaseUrl + pageId,
          type: 'GET',
          dataType: 'jsonp',
          cache: false,
          data: {
            'access_token': '357592347992070|7AcOOPVAzoeBUBybJ5XLBVJHYj8',
            fields: 'posts{attachments{media},message,link,picture,comments.limit(0).summary(true){message,from,likes.limit(0)},likes.limit(0).summary(true)}'
          },
          success: (response) => {
            this.displayPosts(response.posts.data)
          },
          error: (e) => {
            console.log('Post data request failed: ', e)
          }
        })
      },
      // Displays the posts with images in the clouds
      displayPosts (posts) {
        const $clouds = $('.cloud')

        let postsWithImagesCount = 0
        posts.forEach(post => {
          if (post.picture && postsWithImagesCount < 2) {
            let $post = $($clouds[postsWithImagesCount]).find('.cloud--post')
            let $postImage = $post.find('.image')
            $postImage.css('background-image', 'url(' + post.attachments.data[0].media.image.src + ')')
            $postImage.attr('title', post.message)
            $post.find('a').attr('href', post.link)
            $post.find('.stats > span.likes').html(post.likes.summary.total_count)
            $post.find('.stats > span.comments').html(post.comments.summary.total_count)

            postsWithImagesCount++
          }
        })
      }
    },
    mounted () {
      this.getPagePosts('OwnitBroadband')
    }
  }
</script>
