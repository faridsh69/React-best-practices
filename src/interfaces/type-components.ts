export type TypeSuspenderComponent = (props: {
  pageName: string
  auth?: boolean
  guest?: boolean
}) => JSX.Element
