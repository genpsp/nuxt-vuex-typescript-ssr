<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app color="#4A69A5" class="white--text">
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div>ユーザー名</div>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'チラシ設定',
          to: '/',
        },
        {
          icon: 'mdi-apps',
          title: 'クーポン設定',
          to: '/a',
        },
        {
          icon: 'mdi-apps',
          title: 'イベント/キャンペーン',
          to: '/b',
        },
        {
          icon: 'mdi-apps',
          title: '管理画面ユーザー',
          to: '/c',
        },
        {
          icon: 'mdi-apps',
          title: 'アプリユーザー管理',
          to: '/d',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'サツドラ',
    }
  },
}
</script>
