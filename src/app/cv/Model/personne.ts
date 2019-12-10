export class Personne {
  id: number;
  name: string;
  firstname: string;
  job: string;
  age: number;
  path: string;
  cin: number;
  constructor(
    id: number = 0,
    name: string = '',
    firstname: string = '',
    job: string = '',
    age: number = 0,
    path: string = '',
    cin: number = 0) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.job = job;
    this.age = age;
    this.path = path;
    this.cin = cin;
  }
}
