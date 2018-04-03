const User = `
  type User {
    _id:  String!
    firstName:  String!
    secondName: String!
    address:    String!
    cell:       String
    skype:      String
    DOB:        String!
    martialStatus:  Boolean
    children:       String
    drivingLicense: String
    characteristics:  [String]
  }
`

export default [User]
