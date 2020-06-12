const bcrypt = require('bcrypt')

async function encrypt () {
    let pw = await bcrypt.hash('1234',10);
    console.log(pw);    
}

encrypt();