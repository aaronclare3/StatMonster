const User = require("./models");

module.exports = {
    home: (req, res) => {
        User.find({}).sort({f_name:1}) // sorting alphabetically? tack on => .sort({name:1}) or .sort({name:-1}) for reverse order
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createUser: (req, res) => {
        User.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    getRoster: (req, res) => {
        let id = req.params.id;
        User.findById(id)
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    delete: (req, res) => {
        User.findByIdAndDelete({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    addPlayer: (req, res) => {
        User.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true })
        .then(data => {res.json(data)})
        .catch(err => res.json(err))
    },
}
