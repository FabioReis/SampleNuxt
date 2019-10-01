export default (baseRepository) => {
  const repository = baseRepository('/users')

  repository.login = async (email, password) => {
    const result = await repository.http.$get(
      `${repository.basePath}/?email=${email}&password=${password}`
    )

    return result && result.length > 0
  }

  return repository
}
