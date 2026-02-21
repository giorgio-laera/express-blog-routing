const posts = require('../data/posts')
console.log('posts',posts);
function index (req,res) {
    let result = posts;

     res.json(result);

}

function show(req,res) {

    res.json(posts.filter((post) => post.id == req.params.id));
}


function store(req,res) {

    res.send('hai chiesto di CREARE un nuovo elemento');
}

function update(req,res) {

    res.send(`hai chiesto di MODIFICARE un INTERO ELEMENTO ${req.params.id}`);
}

function modify(req,res) {

    res.send(`hai richiesto di MODIFICARE (parzialmente) un elemento ${req.params.id} `);
}

function destroy(req,res) {

    res.send(`hai chiesto di ELIMINARE un elemento ${req.params.id} `);
}
const postsController = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};

module.exports = postsController;