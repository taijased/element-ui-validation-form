<template lang="pug">
  #app
    img(alt="Vue logo", src="./assets/logo.png")
    el-button(@click="show = !show") Открыть форму
    .links
      el-button(type="primary", icon="el-icon-edit") Board in Trello
      el-button(type="primary", icon="el-icon-share") GitHub
    RequestModal(v-if="show", title="Форма отправки в Trello")
</template>

<script>
import RequestModal from './components/RequestModal'

export default {
  name: 'app',
  data () {
    return {
      show: false
    }
  },
  components: {
    RequestModal
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  display flex
  flex-direction column
  justify-content center
  align-items center
  .links
    margin-top 25px
</style>
