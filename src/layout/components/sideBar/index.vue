<template>
  <div class="sideBar"
       id="domSideBar">
    <el-menu :default-active="activeMenu"
             class="el-menu-horizontal-demo"
             background-color="#3a3f51"
             text-color="#b5b6bd"
             active-text-color="rgb(79, 148, 212)"
             mode="horizontal"
             :collapse-transition="false"
             :collapse="opened">
      <sidebar-item v-for="item in routes"
                    :key="item.path"
                    :item="item"
                    :basePath="item.path"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './SideBarItem'
import { mapGetters } from 'vuex'
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(['routes', 'opened']),
    // booleanOpen() {
    //   return this.opened === 'true' ? true : false
    // },
    activeMenu() {
      return this.$route.path
    }
  }
}
</script>
