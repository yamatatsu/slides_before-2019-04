// OOP
class User {
  constructor(f: string, l: string) {
    this.f = f
    this.l = l
  }
  get name() { return `${this.f} ${this.l}` }
}

const user = new User('aaa', 'bbb')
console.log(user.name)


// FP
type User = {
  f: string,
  l: string
}
const name => (user: User) => `${user.f} ${user.l}`

const user: User = { f: 'aaa', l: 'bbb' }
console.log(user |> name)
