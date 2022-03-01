<template>
  <div class="staticContainer">
    <div class="column">
      <div class="staticExplore col-md-5">
        <div class="exploreContainer">
          <h1 class="slogan">Explore</h1>
          <div class="moreDetails">
          <div class="detailsClick">
            <img src="../assets/Plus.svg" 
            class='plusButton' alt="" />
            <div>More Details</div>
            </div>
          </div>
          <div class="detailsPopup">
            <div class="bodyOfDetails">
              <div class="closeDetails fa-solid fa-xmark"></div>
              <h3 class="detailsTitle">Explore</h3>
              <div class="divider"></div>
              <p class="bodyDescription">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              </p>
              <a class="readMoreButton">Read More</a>
            </div>
          </div>
        </div>
        <div class="socialIconLayout">
          <div class="socialIcons">
            <a class="socials">
              <img src="../assets/Facebook.svg" alt="" width="50"/>
            </a>
            <a class="socials">
              <img src="../assets/Instagram.svg" alt="" width="50"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
