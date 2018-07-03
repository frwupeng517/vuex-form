const mutations = {
  updateUsername(state, value) {
    state.form.username = value
  },
  updateAge(state, value) {
    state.form.age = value
  },
  updateGender(state, value) {
    state.form.gender = value
  },
  updateInterest(state, value) {
    state.form.interest = value
  }
}

export default mutations