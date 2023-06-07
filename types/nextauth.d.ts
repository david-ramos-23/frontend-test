// // nextauth.d.ts

// declare module 'next-auth' {

//   interface Session extends DefaultSession {
//     account?: Account
//     profile?: Profile
//   }
// }

// nextauth.d.ts
import { type Account, type DefaultUser, type Profile } from 'next-auth'

interface IProfile extends Profile {
  repos_url?: string
}
interface IUser extends DefaultUser {
  account?: Account
  profile?: IProfile
}
declare module 'next-auth' {
  interface User extends IUser {}
  interface Session {
    user?: User

  }
}
declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}
