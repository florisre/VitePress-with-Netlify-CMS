<template>
  <aside>
    <ul>
      <li v-for="page in pages" :key="page.path">
        <router-link :to="page.path">{{ page.frontmatter.title || page.firstHeadline }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$site.pages.filter((page) => page.path.startsWith('/protokolle/'));
    },
  },
  methods: {
    getFirstHeadline(content) {
      const regex = /^#\s+(.*)$/m;
      const match = regex.exec(content);
      return match ? match[1] : '';
    },
  },
  filters: {
    firstHeadline(content) {
      return this.getFirstHeadline(content);
    },
  },
};
</script>

<style scoped>
aside {
  /* Your sidebar styles */
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>

