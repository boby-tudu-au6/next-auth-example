import fs from 'fs';

export default (req, res) => {
    const { username, email, password } = req.body;
    let userdata = fs.readFileSync('users.json');
    console.log(userdata)
    if (userdata) userdata = JSON.parse(userdata);
    fs.writeFileSync('users.json', JSON.stringify([...userdata, req.body], null, 2));
    return res.status(201).json(req.body)
}