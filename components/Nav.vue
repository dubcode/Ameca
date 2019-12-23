<template>
  <nav class="nav --row --fs --flex">
    <div class="--ctr">
      <ul class="--row">
        <li v-for="link in nav_links" :key="link.id" class="--row">
          <a :href="link.link" class="--row">{{ link.title }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      nav_links: [
        {
          id: '1',
          link: 'https://duckduckgo.com',
          title: 'GitHub'
        },
        {
          id: '2',
          link: 'https://codepen.io/flashvenom/',
          title: 'CodePen'
        },
        {
          id: '3',
          link: 'https://codesandbox.io',
          title: 'SandBox'
        },
        {
          id: '4',
          link: 'https://github.com/dubcode',
          title: 'Medium'
        },
        {
          id: '5',
          link: 'https://bitbucket.org/%7Ba3d86c58-8311-47de-a84e-86aeee8f88b8%7D/',
          title: 'Linkedin'
        }
      ]
    }
  }
}
</script>
