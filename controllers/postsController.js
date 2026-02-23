const posts = require('../data/posts')

function index(req, res) {
	let result = posts;


	if (req.query.tags){
		result=posts.filter(post=>post.tags.includes(req.query.tags));
	}



	res.json(result);
	console.log('questo e result',result)
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
			message: "Post non trovato"
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
const id =Number(req.params.id)
const postsFiltered = posts.find(post=>post.id==id);

if (!postsFiltered){
	res.status(404)
	return res.send(result = {
			error: "Not Found",
			message: "Post non trovato"
		});
}
	posts.splice(posts.indexOf(postsFiltered),1);

	console.log(`post ${id} eliminato, nuova lista dei post:`,posts);
    
	return res.status(204);

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