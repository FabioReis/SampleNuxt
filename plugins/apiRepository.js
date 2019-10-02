import baseRepositoryWrapper from '~/api/repository'
import authRepository from '~/api/authRepository'

export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const baseRepository = baseRepositoryWrapper(ctx.$axios)

  inject('authRepository', authRepository(baseRepository))
  inject('anotherRepository', baseRepository('/anotherOne'))
}
