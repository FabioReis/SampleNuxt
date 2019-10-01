<template>
  <div class="container h-100">
    <div class="row w-100 h-100 justify-content-center align-items-center">
      <logo class="login-logo" />
      <b-form class="col-4 m-2" @submit.prevent="onSubmit">
        <validation-provider
          ref="observerUserName"
          v-slot="{ errors }"
          mode="lazy"
          rules="required|email"
        >
          <b-form-group
            id="username-group"
            class="text-left"
            label="Email:"
            label-for="username"
          >
            <b-form-input
              id="username"
              v-model="userName"
              name="username"
              type="email"
            ></b-form-input>
            <span class="text-danger">{{ errors[0] }}</span>
          </b-form-group>
        </validation-provider>

        <validation-provider
          ref="observerPassword"
          v-slot="{ errors }"
          mode="lazy"
          rules="required"
        >
          <b-form-group
            id="password-group"
            class="text-left"
            label="Senha:"
            label-for="password"
          >
            <b-form-input
              id="password"
              v-model="password"
              name="password"
              type="password"
            ></b-form-input>
            <span class="text-danger">{{ errors[0] }}</span>
          </b-form-group>
        </validation-provider>

        <b-button class="float-right" type="submit" variant="primary"
          >Login
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import Logo from '~/components/Logo.vue'

extend('required', {
  ...required,
  message: 'Campo obrigatório'
})

extend('email', {
  ...email,
  message: 'Digite um e-mail válido'
})

export default {
  components: {
    Logo,
    ValidationProvider
  },
  layout: 'login',
  data() {
    return {
      userName: null,
      password: null
    }
  },
  methods: {
    async onSubmit(e) {
      const isVPassword = (await this.$refs.observerPassword.validate()).valid
      const isVUserName = (await this.$refs.observerUserName.validate()).valid

      if (isVPassword && isVUserName) {
        this.$router.push('/')

        this.userName = null
        this.password = null

        requestAnimationFrame(() => {
          this.$refs.observerUserName.reset()
          this.$refs.observerPassword.reset()
        })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.login-logo
  margin-top: -78px
</style>
