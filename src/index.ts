/**
 * Less common types
 * */

// Tuples
let car: [string, number]
car = ['Ford Ka', 160]
// -------------------------------

// Enums
enum Role {
  'Backend Developer' = 1,
  'Frontend Developer',
  'Scrum Master',
  CTO,
}

console.log(Role.CTO)
console.log('role ', Role[Role["Frontend Developer"]])
// -------------------------------

// Functions
let isAdult: (age: number) => boolean

isAdult = function (age: number) {
  return age >= 18
}

console.log(`is adult age 19 => ${isAdult(19)}`)
// -------------------------------

// Never - Infinite loop | Always ends in error
let errorFunc: () => never

errorFunc = () => {
  throw Error ('any error message!!')
}

function infiniteLoop (): never {
  while (true) {
    // ...
  }
}
// -------------------------------

// Tepe Alias
enum VehicleCategory {
  Truck,
  Car,
  Motorcycle
}

type Vehicle = {
  type: keyof typeof VehicleCategory,
  name: string,
  model: number
}

const myMotorcycle: Vehicle = {
  type: 'Motorcycle',
  name: 'Hornet',
  model: 2013
}

console.log(myMotorcycle)
// -------------------------------

// Interfaces
interface Computer {
  name: string
  brand: string
  price: number
  [prop: string]: any
  killProcess(pid: number): boolean
}

const myNotebook: Computer = {
  name: 'Ideapad 310',
  brand: 'Lenovo',
  price: 2799.9,
  ram: '12gb',
  disk: '250GB SSD',
  killProcess: () => { return true }
}
// -------------------------------

// Classes
class Notebook implements Computer {
  name = ''
  brand = ''
  price = 0
  killProcess (pid: number) {
    console.log(`pid is ${pid}`)
    if (pid > 0) {
      return true
    }
    return false
  }
}

const notebook1 = new Notebook()
notebook1.name = 'Samsung Expert X30'
notebook1.brand = 'Samsung'
notebook1.price = 2339.10
console.log(notebook1)
notebook1.killProcess(874)
// -------------------------------

// Interface inheritance
interface Human {
  gender: string
  name: string
}

interface Car {
  weight?: number
  speed: number
}

interface Hero extends Human, Car {
  speech(): void
}

class Transformer implements Hero {
  gender = ''
  name = ''
  speed = 350
  speech(): void {
    console.log(`I am ${this.name}, the most powerful ever!`)
  }
}

const hero1 = new Transformer()
hero1.name = 'the '
hero1.gender = 'male'
hero1.speech()
// -------------------------------

// Generics
function makeJuice (flavor: any) {
  return flavor
}

console.log(makeJuice('Orange').length)
console.log(makeJuice(['Apple', 'Lemon', 'Melon']).length)
console.log(makeJuice({ name: 'Lemon', price: '$4.5'}).length)

function makeJuice2 <T>(flavor: T): T {
  return flavor
}

console.log(makeJuice2('Orange').length)
console.log(makeJuice2(['Apple', 'Lemon', 'Melon']).length)
// console.log(makeJuice2({ name: 'Lemon', price: '$4.5'}).length)
// console.log(makeJuice2<number[]>(['Apple', 'Lemon', 'Melon']).length)

abstract class Sleep<T, Y> {
  constructor(public v1: T, public v2: T) {}
  abstract result(): Y
}

class SleepTime extends Sleep<number, number> {
  result(): number {
    return this.v2 - this.v1
  }
}
console.log(new SleepTime(2, 10).result())

class SleepQuality extends Sleep<number, string> {
  result(): string {
    const result = this.v2 - this.v1
    if (result >= 8) {
      return 'Got a great night!'
    }
    return 'You should be tired, huh?'
  }
}
console.log(new SleepQuality(2, 10).result())
console.log(new SleepQuality(2, 5).result())
// console.log(new SleepQuality(2, '9').result())
// -------------------------------