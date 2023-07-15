let teacher = [{
    name: "rahul",
    subject: 'science'
}, {
    name: "shilpa",
    subject: 'angular'
}, {
    name: "lovejot",
    subject: 'react'
}, {
    name: "manish",
    subject: 'nodejs'
}]

let student = [{
    name: 'anmol',
    subject: ['science', 'react', 'angular']
},
{
    name: 'vijsy',
    subject: ['science', 'angular','react']
},
{
    name: 'arsh',
    subject: ['science']
}]

let searchTeacherName = 'lovejot';


let findTeacherByName = teacher.filter((item) => item.name == searchTeacherName)
let findStudents = student.filter(item => {
    let studentSub = item.subject.join(',')
    if (studentSub.includes(findTeacherByName[0].subject)) {
        return item.name
    }
})

// console.log(findStudents)