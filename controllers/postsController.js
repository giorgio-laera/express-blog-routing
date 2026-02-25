const posts = require('../data/posts')

function index(req, res) {
	let result = posts;


	if (req.query.tag) {
		result = posts.filter(post => post.tags.includes(req.query.tag));
	}



	res.json(result);
	console.log('questo e result', result)
}

function show(req, res) {
	const id = Number(req.params.id);
	let result = [];

	if (!isNaN(id)) {
		result = posts.filter((post) => post.id == req.params.id);

		res.status(200)
	}
	if (result.length == 0 || isNaN(id)) {
		res.status(404)
		result = {
			error: "Not Found",
			message: "Post non trovato"
		}
	}


	res.json(result)
}


function store(req, res) {

	const newId = posts.at(-1).id + 1;
	console.log("newId", newId)

	console.log(req.body.title)
	newPost = {
		id: newId,
		title:req.body.title,
		img:req.body.img,
		descrizione:req.body.descrizione
	}
	posts.push(newPost) 
	console.log("posts", posts)
	res.send('hai chiesto di CREARE un nuovo elemento');
}

function update(req, res) {

	res.send(`hai chiesto di MODIFICARE un INTERO ELEMENTO ${req.params.id}`);
}

function modify(req, res) {

	res.send(`hai richiesto di MODIFICARE (parzialmente) un elemento ${req.params.id} `);
}

function destroy(req, res) {
	const id = Number(req.params.id)
	const postsFiltered = posts.find(post => post.id == id);

	if (!postsFiltered) {
		res.status(404)
		return res.json(result = {
			error: "Not Found",
			message: "Post non trovato"
		});
	}
	posts.splice(posts.indexOf(postsFiltered), 1);

	console.log(`post ${id} eliminato, nuova lista dei post:`, posts);

	return res.sendStatus(204);

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