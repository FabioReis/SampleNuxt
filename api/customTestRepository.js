export default (baseRepository) => {
  const repository = baseRepository('/myCustomPath')

  repository.anotherMethod = () => {
    // TODO: Example extending a repository
  }

  return repository
}
