const model = require("./model");

module.exports = {
    GET: async( _, res ) => {
        try{
            const Restaraunts = await model.restaraunts();
            if(!Restaraunts) res.status(500).json({message:"Server Find Restaraunts Error!"});

            res.status(200).json({message:"ok"});
        }catch(error){
            res.status(500).json({message: 'Server Error!'});
        }
    },
    POST : async(req , res) => {
        try{
            const { name } = req.body
            if(!name){
                return res.status(400).json({message : "Bad request!"});
            };
            const image = req.files[0]["filename"];

            const newRestaraunt = await model.newRestaraunt(
                name,
                image
            )
            if (!newRestaraunt)
        return res.status(500).json({ message: "Server Create Error!" });

      res
        .status(201)
        .json({ message: "Project created!", Restaraunt: newRestaraunt });
        }catch(error){
            res.status(500).json({message:"Server Error!"})
        };
    },
};