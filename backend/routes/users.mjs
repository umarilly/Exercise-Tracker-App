
import express from 'express';
import bodyParser from 'body-parser';
import User from '../models/user.model.mjs';

const router = express.Router();
router.use(bodyParser.json());

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post(( req , res ) => {
    const username = req.body.username;
    if (!username) {
        return res.status(400).json('Error : Username is required');
    }
    const newUser  = new User({username});
    newUser.save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json('Error : ' + err));
});

export default router;