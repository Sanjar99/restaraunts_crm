const model = require("./model");

module.exports = {
    GET: async( req, res ) => {
        try{
                const Regions = await model.regions();
                if(!Regions) res.status(500).json({message:"Server Find Regions Error!"});
                res.status(200).json({message:"ok" , Regions:Regions });
        }catch(error){
            res.status(500).json({message: 'Server Error!'});
        };
    },
    POST : async(req , res) => {
        try{
            const {name} = req.body;

            if(!name){
                return res.status(400).json({message : "Bad request!"});
            };
            const newRegion = await model.newRegion(
                name,
            );
            if (!newRegion)
        return res.status(500).json({ message: "Server Create Error!" });

      res
        .status(201)
        .json({ message: "newRegion created!", newRegion: newRegion });
        }catch(error){
            console.log(error);
            res.status(500).json({message:"Server Error!"})
        };
    },
    DELETE : async(req , res) => {
        try{
            const {id} = req.body;
            if(!id){
                return res.status(400).json({message: "Bad request!"});
            };
            const deleteRegion = await model.deleteRegion(id);
            if(!deleteRegion){
                return res.status(400).json({message: "Server Delete Region Error!"});
            };

            res.status(200).json({message: "ok" , Region: deleteRegion});
        }catch(error){
            res.status(500).json({message: "Server Error!"})
        }
    }
};