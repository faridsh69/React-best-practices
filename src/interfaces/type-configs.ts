export type RoutesType = RouteType[]

export type RouteType = {
  name: string
  path: string
  element: React.ReactElement
  errorElement?: React.ReactElement
  children?: RouteType[]
}
