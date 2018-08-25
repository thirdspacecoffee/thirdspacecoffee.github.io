<template>
<div class="canvas">
  <b-container class="section">
    <b-row>
      <b-col md="7" sm="7">
        <h2>What's up with the name?</h2>
        <div class="short-desc"><em>The idea is that most people live their lives in three spaces: home, work, and one additional space.</em></div>
        <p>That third space is generally a leisure or common space such as a coffee shop, bar, community center or anywhere people gather to hang out and build relationships.  It plays a large part in the health and vitality of the local culture.  We want Third Space Coffee to be the third space for Bonner Springs specifically, and anyone from the greater KC community wanting to connect.</p>
      </b-col>
      <b-col md="5" sm="5" class="vertical-center">
        <img src="@/assets/img/Third-Space-Coffee-Draft-2_original.jpg">
      </b-col>
    </b-row>
  </b-container>

  <b-container class="section">
  <b-row>
    <b-col md="5" sm="5" class="vertical-center">
      <img src="@/assets/img/about-billamy.jpg">
    </b-col>
    <b-col md="7" sm="7">
      <div class="block">
        <div class="section-title">
            <h2>Who are we?</h2>
            <div class="short-desc"><em>Third Space Coffee is owned and run by Bill and Amy Gibbs.</em></div>
        </div>
        <p>We've lived in Bonner Springs since 2009 and have grown to love our community.  Amy has over 20 years of experience in the coffee industry.  Five of those years were managing.  She's organized, creative, and an awesome coffee expert (and cook).  She always has a smiling face and heart to serve.  But what Bill and Amy are most excited about is meeting new people, getting to know them and sharing hope and redemption over a hot cup of joe.</p>
      </div>
    </b-col>
  </b-row>
  </b-container>

</div>
</template>

<script>
export default {

}
</script>

<style .scoped>
.canvas {
  text-align: left;
}

.right {
  text-align: right;
}

.short-desc {
  margin-bottom: 10px;
}

.section {
  padding-top: 20px;
}

.section:last-child {
  padding-bottom: 20px;
}

.vertical-center {
  margin-top: auto;
  margin-bottom: auto;
}

img {
  width: 100%;
}
</style>
