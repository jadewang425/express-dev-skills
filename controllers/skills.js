const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function show(req, res) {
    res.render('skills/show', {
        //why is below not working
        skill: Skill.getOne(req.params.skill),
        title: 'Skill Details'
    });
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    });
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill'} );
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.skill);
    // console.log('deleteSkill', req.parms.skill)
    res.redirect('/skills');
}