const express = require('express');
const app = express();
app.use(express.json());

let students = [{ id: 1, name: "Rahul" }];

app.get('/students', (req, res) => res.json(students));

app.post('/students', (req, res) => {
    students.push(req.body);
    res.send("Added");
});

app.patch('/students/:id', (req, res) => {
    let s = students.find(x => x.id == req.params.id);
    if (s) Object.assign(s, req.body);
    res.json(s || "Not found");
});

app.delete('/students/:id', (req, res) => {
    students = students.filter(x => x.id != req.params.id);
    res.send("Deleted");
});

app.listen(3000);