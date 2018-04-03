const Job = `
  type Job {
    _id:  String!
    from: String!
    to:   String!
    company:  String!,
    position: String
    stack:    [Stack]
  }
`

const Stack = `
  type Stack {
    _id:  String!
    value:  String!
  }
`
export default [Job, Stack]
