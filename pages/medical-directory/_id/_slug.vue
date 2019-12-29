<template>
  <div class="--row">
    <div class="directory__thumb">
        <h4 class="t2 --m2" v-html="this.title" />
        <template v-if="this.thumb">
          <img :src="this.thumb" :alt="this.title" class="--m3"/>
        </template>
    </div>
    <div class="directory__excerpt">
        <template v-if="this.location">
          <h5 class="t4 --m4">Location</h5>
          <p v-html="this.location" />
        </template>
        <template v-if="this.hospitalType">
          <h5 class="t4 --m4">Hospital Type</h5>
          <p v-html="this.hospitalType" />
        </template>
        <template v-if="this.beds">
          <h5 class="t4 --m4">Number of Beds</h5>
          <p v-html="this.beds" />
        </template>
        <template v-if="this.facilities">
          <h5 class="t4 --m4">Hospital Facilities</h5>
          <p v-html="this.facilities" />
        </template>
        <template v-if="this.comments">
          <h5 class="t4 --m4">Additional Comments</h5>
          <p v-html="this.comments" />
        </template>
        <template v-if="this.specialities">
          <h5 class="t4 --m4">Specialities Required</h5>
          <p v-html="this.specialities" />
        </template>
        <template v-if="this.transportation">
          <h5 class="t4 --m4">Transportation</h5>
          <p v-html="this.transportation" />
        </template>
        <template v-if="this.accommodation">
          <h5 class="t4 --m4">Accommodation</h5>
          <p v-html="this.accommodation" />
        </template>
        <template v-if="this.stay">
          <h5 class="t4 --m4">Length of Stay</h5>
          <p v-html="this.stay" />
        </template>
        <template v-if="this.visa">
          <h5 class="t4 --m4">Visa Requirements</h5>
          <p v-html="this.visa" />
        </template>
        <template v-if="this.other">
          <h5 class="t4 --m4">Other Information</h5>
          <p v-html="this.other" />
        </template>
        <template v-if="this.contact">
          <h5 class="t4 --m4">Contact Name</h5>
          <p v-html="this.contact" />
        </template>
        <template v-if="this.landline">
          <h5 class="t4 --m4">Telephone</h5>
          <p v-html="this.landline" />
        </template>
        <template v-if="this.mobile">
          <h5 class="t4 --m4">Mobile</h5>
          <p v-html="this.mobile" />
        </template>
        <template v-if="this.email">
          <div class="--row --m1">
            <h5 class="t4 --m4">Email</h5>
            <a :href="'mailto:' + this.email" v-html="this.email" target="_blank" />
          </div>
        </template>
        <template v-if="this.website">
          <div class="--row --m1">
            <h5 class="t4 --m4">Website</h5>
            <a :href="this.website" v-html="this.website" target="_blank" />
          </div>
        </template>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'layout-one',

  // meta
  head () {
    return {
      title: this.title,
      bodyAttrs: { class: 'single' },
      meta: [
        { hid: 'description', name: 'description', content: this.excerpt },
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'og:description', name: 'og:description', content: this.excerpt }
      ]
    }
  },

  // post data
  data () {
    return {
      id: this.$route.params.id,
      // global variable set for consistent URL in main js
      posts: [],
      post: '',
      title: '',
      thumb: '',
      content: '',
      date: '',
      categoryId: '',
      tags: '',
      isActive: 'isActive',
      location: '',
      hospitalType: '',
      beds: '',
      facilities: '',
      comments: '',
      specialities: '',
      transportation: '',
      accommodation: '',
      stay: '',
      visa: '',
      other: '',
      contact: '',
      landline: '',
      mobile: '',
      email: '',
      website: ''
    }
  },
  // post methods
  methods: {
  // get single post
    getSingle () {
      this.id = this.$route.params.id
      axios.get(process.env.baseUrl + 'posts/' + this.id + '?_embed', {
      })
        .then((response) => {
          this.title = response.data.title.rendered
          this.content = response.data.content.rendered
          this.thumb = response.data.images.medium
          this.tags = response.data.tags
          this.date = response.data.date
          this.categoryId = response.data.categories[0]
          this.location = response.data.acf.location
          this.hospitalType = response.data.acf.hospital_type
          this.beds = response.data.acf.number_of_beds
          this.facilities = response.data.acf.hospital_facilities
          this.comments = response.data.acf.additional_comments
          this.specialities = response.data.acf.specialities_required
          this.transportation = response.data.acf.transportation
          this.accommodation = response.data.acf.accommodation
          this.stay = response.data.acf.length_of_stay
          this.visa = response.data.acf.visa_requirements
          this.other = response.data.acf.other_info
          this.contact = response.data.acf.contact_name
          this.landline = response.data.acf.landline
          this.mobile = response.data.acf.mobile
          this.email = response.data.acf.email
          this.website = response.data.acf.website
        })
        .catch((response) => {
          console.log(response)
        })
    }
  },
  mounted () {
    this.getSingle()
  }
}
</script>

<style scoped>
.directory {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-rows: 1fr;
  grid-template-areas: "thumb excerpt";
}
.directory__excerpt {grid-area: excerpt; }
.directory__excerpt p {
  text-align: left;
}
.directory__thumb { grid-area: thumb; }
.directory__thumb img {
  max-width: 768px;
}
</style>
