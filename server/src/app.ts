import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
// import session from 'express-session';
// import passport from 'passport';
// import flash from 'express-flash';
// import methodOverride from 'method-override';
import { db } from './daos/db';
import { employeeRouter } from './routers/employee.router';
import { managerRouter } from './routers/manager.router';
import { userRouter } from './routers/user.router';
// import { loginRouter } from './auth/index';
// import { portalRouter } from './routers/portal-router';

const app = express();
// const initializePassport = require('./auth/passportConfig');
// initializePassport(passport);

// app.use(session({
//     secret: 'hippopotamus',
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(methodOverride('_method'));
// app.use(flash());
// app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;
app.set('port', port);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

/* CORS middleware - Sets CORS headers to allow requests from
        the domain of the intended client */
    app.use((request, response, next) => {
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        response.setHeader('Access-Control-Allow-Headers', 'content-type')
        // response.setHeader('Access-Control-Allow-Methods', 'GET POST');
        next();
    })

app.use(bodyParser.json());

// app.use((request, response, next) => {
//     next();
// });
// app.use(express.urlencoded({extended:false}));

// app.use('/', loginRouter);
// app.use('/portal', portalRouter);
app.use('/user', userRouter);
app.use('/reimbursement', employeeRouter);
app.use('/manager', managerRouter);

// app.delete('/logout', (req, res) => {
//     req.logOut();
//     res.redirect('/');
// });

process.on('unhandledRejection', () => {
    db.end().then(() => {
        console.log('Database pool closed.');
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});