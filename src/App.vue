<template lang="pug">
  #app
    img(alt="Vue logo", src="./assets/logo.png")
    el-button(@click="show = !show") Открыть форму
    .links
      a(href="https://trello.com/b/VrbJ6vRD/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B4%D0%BE%D1%81%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%84%D0%BE%D1%80%D0%BC%D1%8B-vue", target="_blank") Board in Trello
      a(href="https://github.com/taijased/element-ui-validation-form", target="_blank") GitHub
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
    a 
      margin 20px
</style>
