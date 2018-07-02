<template>
  <div id="app">
    <input type="text" class="form-control" v-model="msg" placeholder="请输入代办事项" @keyup.enter="addTodos(msg)">
    <div class="lists">
      <router-link class="list" to="/all">全部</router-link>
      <router-link class="list" to="/undo">待办</router-link>
      <router-link class="list" to="/done">完成</router-link>
      <router-link class="list" to="/delete">删除</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    ...mapMutations([
      'addTodos'
    ])
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  padding: 0 30px;
  .lists{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .list{
      padding: 5px;
      color: #666;
      text-decoration: none;
      &.router-link-active{
        color: red;
      }
    }
  }
}
</style>
