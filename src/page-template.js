function createHTML(data) {

    let main = ''

    for(i=0; i < data.length; i++) {

        let name = data[i].name;
        let id = data[i].id;
        let email = data[i].email;
        let role = data[i].getRole();
        let display; 

        if (role === 'Manager') {
            display = 'Office #: ' + data[i].officeNumber;
        } else if (role === 'Engineer') {
            display = `Github: <a href= 'https//github.com/${data[i].github}'>${data[i].github}</a>`;
        } else if (role === 'Intern') {
            display = 'School: ' + data[i].school;
        } else {
            console.log('Uh oh no role!');
        }

        main = main + `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${name} </h5>
          <h6> ${role} </h6>
          <p> ID: ${id} </p>
          <p> Email: ${email} </p>
          <p> ${display} </p>
        </div>
        </div>`
    }

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Project Team</title>
    <header> Project Team </header> 
    </head>
    <body>
    ${main}
    </body>
    </html>
`
}


module.exports = createHTML;