import fs from 'fs';
// let data = JSON.stringify(student);
// fs.writeFileSync('student-2.json', data);
// let rawdata = fs.readFileSync('student.json');

export default (req, res) => {
    const data = fs.readFileSync('users.json')
    return res.status(200).json(JSON.parse(data))
}