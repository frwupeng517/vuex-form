<template>
  <div>
    <p>用户名：{{username}}</p>
    <p>年龄：{{age}}</p>
    <p>性别：{{gender}}</p>
    <p>爱好：{{interest}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.state.form.username
    },
    age() {
      return this.$store.state.form.age
    },
    gender() {
      return this.$store.state.form.gender
    },
    interest() {
      return this.$store.state.form.interest
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


