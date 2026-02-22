const posts = require('../data/posts')

function index(req, res) {
	let result = posts;

	res.json(result);

}

function show(req, res) {
	const id = Number(req.params.id);
	let result =[];

	if (!isNaN(id)) {
		result = posts.filter((post) => post.id == req.params.id);

		res.status(200)
	} 
	if( result.length == 0 || isNaN(id)){
		res.status(404)
		result = {
			error: "Not Found",
			message: "Pizza non trovata"
		}}
	

	res.json(result)
}


function store(req, res) {

	res.send('hai chiesto di CREARE un nuovo elemento');
}

function update(req, res) {

	res.send(`hai chiesto di MODIFICARE un INTERO ELEMENTO ${req.params.id}`);
}

function modify(req, res) {

	res.send(`hai richiesto di MODIFICARE (parzialmente) un elemento ${req.params.id} `);
}

function destroy(req, res) {

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