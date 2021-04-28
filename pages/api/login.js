import fs from 'fs';

export default (req, res) => {
    let userdata = fs.readFileSync('users.json');
    userdata = JSON.parse(userdata);
    const { email, password } = req.body;
    const data = userdata.filter((item) => {
        return item.email === email && item.password === password 
    });
    return res.status(200).json(data);
}