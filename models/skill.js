const skills = [
    {skill: 'JavaScript', level: 'intermediate'},
    {skill: 'CSS', level: 'intermediate'},
    {skill: 'HTML', level: 'intermediate'},
    {skill: 'Express.js', level: 'beginner'}
]
module.exports = {
    getAll,
    getOne
}

function getOne(skill) {
    // something's wrong with this one
    // console.log(skills.find(obj => obj.skill === skill))
    return skills.find(obj => obj.skill === skill)
}

function getAll() {
    // console.log(skills)
    return skills
}