const fs = require('fs');

fs.writeFile('employee.json', '{"name": "Employee 1 Samet", "salary": 2000}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('Dosya Oluşturuldu.')
});

fs.readFile('employee.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
})

fs.appendFile('employee.json', '{"name": "Employee 2 Hakkı", "salary": 7000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('Yeni işçi eklendi');
})

fs.unlink('employee.json',(err) => {
    if(err) console.log(err);
    console.log('Dosya silindi')
})


