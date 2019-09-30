export default (baseRepository) => {
  const repository = baseRepository('/myCustomPath')

  repository.anotherMethod = (id) => {
    // TODO: Example extending a repository
    return repository.http.$get(`${repository.basePath}/${id}`)
  }

  return repository
}
