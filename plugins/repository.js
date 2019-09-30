import baseRepositoryWrapper from '~/api/repository'
import customRepository from '~/api/customTestRepository'

export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const baseRepository = baseRepositoryWrapper(ctx.$axios)

  inject('customRepository', customRepository(baseRepository))
  inject('anotherRepository', baseRepository('/anotherOne'))
}
