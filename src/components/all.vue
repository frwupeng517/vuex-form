<template>
  <div class="items">
    <div class="item" v-for="todo in todoLists">{{todo}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      todoLists: 'allTodos'
    })
  }
}
</script>

<style lang="scss" scoped>
.items{
  margin-top: 30px;
  .item{
    margin-bottom: 15px;
    padding: 5px 0;
    text-align: left;
  }
}
</style>

