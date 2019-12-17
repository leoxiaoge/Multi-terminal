<template>
  <div class="content">
    <Header></Header>
    <p>应用</p>
  </div>
</template>
<script>
import Vue from 'vue'
import Header from '@/common/Header.vue'
export default Vue.extend({
  name: 'App',
  components: {
    Header
  },
  created () {
    window.addEventListener('wxload', query => console.log('page1 wxload', query))
    window.addEventListener('wxshow', () => console.log('page1 wxshow'))
    window.addEventListener('wxready', () => console.log('page1 wxready'))
    window.addEventListener('wxhide', () => console.log('page1 wxhide'))
    window.addEventListener('wxunload', () => console.log('page1 wxunload'))
    if (process.env.isMiniprogram) {
      console.log('I am in miniprogram')
    } else {
      console.log('I am in Web')
    }
    console.log(process.env)
    console.log(process.env.web)
    if (process.env.web) {
      console.log('I am in web!')
    }
  },
  methods: {
    onClickJump () {
      window.location.href = '/test/list/123'
    },
    onClickOpen () {
      window.open('/test/detail/123')
    }
  }
})
</script>

<style lang="less">
.content {
  margin-top: 20px;
}

a, button {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ddd;
}

.miniprogram-root {
  .for-web {
    display: none;
  }
}
</style>
