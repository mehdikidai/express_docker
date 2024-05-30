import users from "../db/users.js";

class User {

    static index(req, res) {

        res.status(200).json(users);

    }

    static show(req, res) {


        const r = users.filter((el) => el.id === +req.params.id);

        return  r.length === 0  ?  res.status(404).json({ msg: "404 not found" }) : res.status(200).json(r);


    }
}

export default User;
