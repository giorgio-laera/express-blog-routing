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
		result = posts.find(post => post.id == id);

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
	//console.log("newId", newId)

	//console.log(req.body.title)
	newPost = {
		id: newId,
		title: req.body.title,
		img: req.body.img,
		descrizione: req.body.descrizione
	}
	posts.push(newPost)
	//console.log("posts", posts)
	res.sendStatus(201);
}

function update(req, res) {
	const id = Number(req.params.id);
	let result = "";
	result = posts.find(post => post.id == id);
	if (!result) {
		res.status(404)
		return res.json(result = {
			error: "Not Found",
			message: "Post non trovato"
		});
	}


	result.title = req.body.title;
	result.content = req.body.content
	result.image = req.body.image
	result.tags = req.body.tags
	res.status(200)


	//console.log(result.lenght)
	res.json(result)
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