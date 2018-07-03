<template>
  <form action="">
    <div class="form-group">
      <label for="username">用户名：</label>
      <input type="text" class="form-control" id="username" name="username" v-model="username">
    </div>
    <div class="form-group">
      <label for="age">年龄：</label>
      <input type="number" class="form-control" id="age" name="age" v-model="age"> <!-- $store.state.age -->
    </div>
    <div class="form-group">
      <label for="gender">性别：</label>
      <label class="radio-inline">
        <input type="radio" name="gender" value="male" v-model="gender" checked>男
      </label>
      <label class="radio-inline">
        <input type="radio" name="gender" value="female" v-model="gender">女
      </label>
      <label class="radio-inline">
        <input type="radio" name="gender" value="secret" v-model="gender">保密
      </label>
    </div>
    <div class="form-group">
      <label for="gender">爱好：</label>
      <label class="checkbox-inline">
        <input type="checkbox" name="interest" value="read" v-model="interest">阅读
      </label>
      <label class="checkbox-inline">
        <input type="checkbox" name="interest" value="swim" v-model="interest">游泳
      </label>
      <label class="checkbox-inline">
        <input type="checkbox" name="interest" value="basketball" v-model="interest">篮球
      </label>
    </div>
    <router-link tag="button" type="submit" class="btn btn-primary" to="/result">提交</router-link>
  </form>
</template>

<script>
export default {
  computed: {
    username: {
      get() {
        return this.$store.state.form.username
      },
      set(value) {
        this.$store.commit('updateUsername', value)
      }
    },
    age: {
      get() {
        return this.$store.state.form.age
      },
      set(value) {
        this.$store.commit('updateAge', value)
      }
    },
    gender: {
      get() {
        return this.$store.state.form.gender
      },
      set(value) {
        this.$store.commit('updateGender', value)
      }
    },
    interest: {
      get() {
        return this.$store.state.form.interest
      },
      set(value) {
        this.$store.commit('updateInterest', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


