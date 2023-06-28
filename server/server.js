const express = require('express');
const fs = require('fs');
const path = require('path');

const ENTRANTS_PATH = path.join(__dirname, './entrants.json');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/entrants', (req, res) => {
	fs.readFile(ENTRANTS_PATH, (err, data) => {
		if (err) {
			res.json({ error: 'shit is fucked' });
			return;
		}

		const entrants = JSON.parse(data);
		res.json(entrants);
	});
});

app.post('/register', (req, res) => {
	fs.readFile(ENTRANTS_PATH, (err, data) => {
		if (err) {
			res.json({ error: 'reading shit is fucked' });
			return;
		}

		const entrants = JSON.parse(data);
		entrants.push(req.body);

		fs.writeFile(ENTRANTS_PATH, JSON.stringify(entrants), (err) => {
			if (err) {
				res.json({ error: 'writing shit is fucked' });
				return;
			}

			res.json({ msg: 'thank you for registering! ;)'})
		});
	});
});

app.listen(3000, () => console.log('Server running on port 3000!'));
