<template>
  <nav class="nav --row --fs --flex">
    <div class="--ctr">
      <div class="grid-3">

        <div>
          <ul class="--row">
            <li v-for="link in nav_set_1" :key="link.link" class="--row">
              <a :href="link.link" class="--row">{{ link.title }}</a>
            </li>
          </ul>
        </div>

        <div>
          <ul class="--row">
            <li v-for="link in nav_set_2" :key="link.link" class="--row">
              <a :href="link.link" class="--row">{{ link.title }}</a>
            </li>
          </ul>
        </div>

        <div>
          <ul class="--row">
            <li v-for="link in nav_set_3" :key="link.link" class="--row">
              <a :href="link.link" class="--row">{{ link.title }}</a>
            </li>
            <li><a href="http://ameca.org.uk/ui/contact-form/" target="_blank">Contact</a></li>
          </ul>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      nav_set_1: [
        {
          link: '/about',
          title: 'About Us'
        },
        {
          link: '/partners',
          title: 'Partners & Sponsors'
        },
        {
          link: '/news',
          title: 'News'
        },
        {
          link: '/newsletters',
          title: 'Newsletters'
        }
      ],
      nav_set_2: [
        {
          link: '/what-we-do',
          title: 'What We Do'
        },
        {
          link: '/why-malawi',
          title: 'Why Malawi'
        },
        {
          link: '/maternity-unit',
          title: 'Maternity Unit'
        },
        {
          link: '/ameca-healthcare-clinic',
          title: 'AMECA Clinic'
        },
        {
          link: '/the-ameca-wing',
          title: 'AMECA Wing'
        },
        {
          link: '/surgical-training',
          title: 'Surgical Training'
        },
        {
          link: '/medical-directory',
          title: 'Medical Directory'
        },
        {
          link: '/medical-electives',
          title: 'Elective Bursaries'
        },
        {
          link: '/alumni',
          title: 'Awards Alumni'
        }
      ],
      nav_set_3: [
        {
          link: '/get-involved',
          title: 'Get Involved'
        },
        {
          link: '/challenge-fund-raising',
          title: 'Challenge Fund Raising'
        },
        {
          link: '/run-an-event',
          title: 'Run an Event'
        },
        {
          link: '/leave-a-legacy',
          title: 'Leave a Legacy'
        },
        {
          link: '/donate',
          title: 'Donate'
        }
      ]
    }
  }
}
</script>
