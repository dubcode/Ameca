<template>
  <div class="sidebar --row">
    <div class="--row --m3">
        <span class="t3 --m1">
        News Archive
        </span>
        <nav>
          <ul>
            <li>
                <nuxt-link to="/news/2019/">2019</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/news/2018/">2018</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/news/2017/">2017</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/news/2016/">2016</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/news/2015/">2015</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/news/2014/">2014</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/news/2013/">2013</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/news/2012/">2012</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/news/2011/">2011</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/news/2010/">2010</nuxt-link>
            </li>
          </ul>
        </nav>
    </div>
  </div>
</template>

<style scoped>
.sidebar nav ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.sidebar nav li a {
  display: block;
  color: #111;
  font-size: 1.4em;
  line-height: 3em;
  text-decoration: none;
  text-align: center;
  border-bottom: 1px solid #ccc;
  transition: all ease 0.3s;
}
.sidebar nav li:last-child a {
  border-bottom: none;

}
.sidebar nav li:hover a {
  color: #cda272;

}
</style>
