const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"],
};

const name = person.name;

const { job, parents } = person;

console.log(name, job, parents);

const [father, mother] = parents;

console.log(father, mother);

function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name,
    job,
    parents,
  };
}

const luke = createUser(person);
console.log(luke);

// -------------------------------------------------------------------------//

const patriarca = {
    nome: 'Abraão',
    idade: 100,
    filhos: ['Ismael', 'Isaque', 'Quetura', 'Zinrã', 'Jocsã', 'Medã', 'Midiã', 'Isbaque', 'Suá'],
    esposa: 'Sara'
}

const {nome, idade, esposa, filhos} = patriarca
const [Ismael, Isaque] = filhos
console.log(nome, idade, esposa, Ismael, Isaque)

function pessoa({nome, idade, filhos, esposa}){
    return{
        nome,
        idade,
        filhos,
        esposa
    }
}

const Abraão = pessoa(patriarca)
console.log(Abraão)
