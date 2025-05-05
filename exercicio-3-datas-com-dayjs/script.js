const dayjs = require('dayjs')

function birthday(date){
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nexBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nexBirthday.diff(today, 'day') + 1

    console.log(`Idade: ${ageInYears}`)
    console.log(`Próximo aniversário: ${nexBirthday.format("DD/MM/YYYY")}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday('2003-06-13')
