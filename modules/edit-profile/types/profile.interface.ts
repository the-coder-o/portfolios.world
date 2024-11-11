export interface IProfile {
  _id?: string
  name?: string
  email?: string
  username?: string
  website_name?: string
  avatar?: string
  location?: string
  bio?: string
}

export interface ProfileEdit {
  name?: string
  email?: string
  username?: string
  website_name?: string
  avatar?: string
  location?: string
  bio?: string
}