// Values kept in local storage
// View doc: https://github.com/rubystarashe/nuxt-vuex-localstorage
export const state = () => ({
  isUserAuthenticated: false,
  user: null
})

export const mutations = {
  setIsUserAuthenticated(state, value) {
    state.isUserAuthenticated = value
  }
}
