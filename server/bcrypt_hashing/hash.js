const bcrypt = require('bcrypt')

async function encrypt () {
    let pw = await bcrypt.hash('123',10);
    console.log(pw);    
}

encrypt();