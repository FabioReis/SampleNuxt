<template>
  <div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <logo class="login-logo" />
      <b-form class="col-4 m-2">
        <b-form-group id="username-group" label="Email:" label-for="username">
          <b-form-input
            id="username"
            v-model="userName"
            type="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="password-group" label="Senha:" label-for="password">
          <b-form-input
            id="password"
            v-model="password"
            type="password"
          ></b-form-input>
        </b-form-group>

        <b-button class="float-right" type="submit" variant="primary"
          >Login</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  layout: 'login',
  data() {
    return {
      userName: null,
      password: null
    }
  }
}
</script>

<style lang="sass" scoped>
.login-logo
  margin-top: -78px
</style>
