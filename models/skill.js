const skills = [
    {skill: 'JavaScript', level: 'intermediate'},
    {skill: 'CSS', level: 'intermediate'},
    {skill: 'HTML', level: 'intermediate'},
    {skill: 'Express.js', level: 'beginner'}
]
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function deleteOne(skill) {
    const idx = skills.findIndex(skillObj => skillObj.skill === skill);
    skills.splice(idx, 1);
}

function getOne(skill) {
    return skills.find(obj => obj.skill === skill)
}

function getAll() {
    return skills
}

function create(skillObj) {
    skillObj.level = 'beginner';
    skills.push(skillObj);
}