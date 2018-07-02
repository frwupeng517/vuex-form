const mutations = {
  addTodos (state, payload) {
    state.todoLists.push(payload)
    console.log(state.todoLists)
  }
}

export default mutations