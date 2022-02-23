
const model = require("./model");
const { hashPassword } = require("../../util/bcrypt");
const { sign, verify } = require("../../util/jwt");
module.exports = {
    GET: async( req, res ) => {
        try{
            const {id} = req.params
            const { tokenreg } = req.headers;
            if (!tokenreg ) return res.status(400).end("BAD_REQUEST!");
              
            const { adminVerify } = verify(tokenreg);
            if (!adminVerify) return res.status(400).end("BAD_REQUEST!");
            if(id){
                    const Admin = await model.filterAdmin(id);
                    if(!Admin) res.status(500).json({message:"Server Find Admin Error!"});
                    res.status(200).json({message:"ok" , Admin:Admin });
                }else{
                    const Admin = await model.admin();
                    if(!Admin) res.status(500).json({message:"Server Find Admin Error!"});
                    res.status(200).json({message:"ok" , Admin:Admin });
                };
        }catch(error){
            res.status(500).json({message: 'Server Error!'});
        };
    },
    POST : async(req , res) => {
        try{
            const { name , phone , password} = req.body

            if(!name , !phone ,!password){
                return res.status(400).json({message : "Bad request!"});
            };
            if (
                !password.match(
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{7,17}$/
                    )
                    )
                    return res
                    .status(400)
                    .end(
                        "Kamida 7 ta belgi, ko'pi bn 17 ta belgi, kotta-kichkina harf, belgi, son bo'lishi kerak!"
                        );          
            const hashedPassword = await hashPassword(password);
 
            const image = req.files[0]["filename"];
 
            const tell = phone.split(',')
            
            const newAdmin = await model.newAdmin(
                name,
                tell,
                hashedPassword,
                image,
            );

            if (!newAdmin)
                 return res.status(500).json({ message: "Server Create Error!" });
            const tokenReg = sign({ adminVerify: newAdmin.admin_id });

            res
                .status(201)
                .json({ message: "Admin created!", Admin: newAdmin , tokenReg });
            }catch(error){
                res.status(500).json({message:"Server Error!"})
        };
    },
    UPDATE : async(req , res) => {
        try{
            const { name , phone , id , password} = req.body
            
            if(!id || !name || !phone || !password){
                return res.status(400).json({message : "Bad request!"});
            };
            const tell = phone.split(',');

            if (
                !password.match(
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{7,17}$/
                    )
                );
                    return res
                    .status(400)
                    .end(
                        "Your password must be at least 7 characters, no more than 17 characters, uppercase and lowercase letters, characters, numbers!"
                        );          
            const hashedPassword = await hashPassword(password);

            const image = req.files[0]["filename"];
                
            const updateAdmin = await model.updateAdmin( 
                name,
                tell,
                hashedPassword,
                image,
                id
            );
                if (!updateAdmin) return res.status(500).json({ message: "Server Update Error!" });
            res
                .status(201)
                .json({ message: "Admin update!", Food: updateAdmin });
        }catch(error) {
            res.status(500).json({message:'Server Error!'})
        };
    },
    DELETE : async(req , res) => {
        try{
            const {id} = req.body;
            if(!id){
                return res.status(400).json({message: "Bad request!"});
            };
            const deleteAdmin = await model.deleteAdmin(id);
            if(!deleteAdmin){
                return res.status(400).json({message: "Server delete Food Error!"});
            };

            res.status(200).json({message: "ok" , Admin: deleteAdmin});
        }catch(error){
            res.status(500).json({message: "Server Error!"})
        }
    }
};