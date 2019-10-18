<template>
  <div class="header">
    <div class="header_l">
      <a href="javascript:;"
         class="logoLink"><img src="./logo.jpg"
             alt="logo" />帝仪数据平台</a>
    </div>
    <div class="header_r">
      <div class="headr_d1">
        <bread-crumb class="bread"></bread-crumb>
      </div>
      <div class="headr_d2">
        <ul class="headrUl clearFixed">
          <li id="toIndex">
            <span class="userDrop_text iconFont">{{ userName }}</span>
          </li>
          <li id="toIndex">
            <router-link to="/"><i class="el-icon-s-home iconFont"></i></router-link>
          </li>
          <li id="domMessage">
            <el-badge is-dot
                      @click.native="toggleMsgShow">
              <i class="el-icon-message-solid iconFont"></i>
            </el-badge>
          </li>
          <li id="domFullScreen">
            <full-screen></full-screen>
          </li>
          <li id="loginOut">
            <a @click="_loginOut"><i class="el-icon-switch-button iconFont"></i></a>
          </li>
          <!-- <li id="domPersonal">
            <user-dropdown></user-dropdown>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BreadCrumb from '@/components/BreadCrumb'
import FullScreen from '@/components/FullScreen'
export default {
  components: {
    BreadCrumb,
    FullScreen
  },

  computed: {
    ...mapGetters(['userName'])
  },
  methods: {
    toggleMsgShow() {
      this.$store.commit('app/SET_MSGISOPEN')
    },
    _loginOut() {
      this.$store.dispatch('user/loginOut')
    }
  }
}
</script>
