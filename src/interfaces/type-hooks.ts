export type TypeUseCrud = (key: string) => {
  list: []
  createMutation: {
    mutate: (data: unknown) => void
  }
  updateMutation: {
    mutate: (data: unknown) => void
  }
}
