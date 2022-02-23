const model = require("./model");

module.exports = {
    GET: async( req, res ) => {
        try{
            const {id} = req.params
                if(id){
                    const Branches = await model.branchesFilter(id);
                    if(!Branches) res.status(500).json({message:"Server Find Branches Error!"});
                    res.status(200).json({message:"ok" , Branches:Branches });
                }else{
                    const Branches = await model.branches();
                    if(!Branches) res.status(500).json({message:"Server Find Branches Error!"});
                    res.status(200).json({message:"ok" , Branches:Branches });
                };
        }catch(error){
            res.status(500).json({message: 'Server Error!'});
        }
    },
    POST : async(req , res) => {
        try{
            const { name , id} = req.body
            if(!name){
                return res.status(400).json({message : "Bad request!"});
            };
            const image = req.files[0]["filename"];

            const newBranch = await model.newBranch(
                name,
                image,
                id
            )
            if (!newBranch)
        return res.status(500).json({ message: "Server Create Error!" });

      res
        .status(201)
        .json({ message: "Branch created!", Branch: newBranch });
        }catch(error){
            res.status(500).json({message:"Server Error!"})
        };
    },
};