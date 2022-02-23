const model = require("./model");

module.exports = {
    GET: async( req, res ) => {
        try{
            const {id} = req.params
                if(id){
                    const Foods = await model.foodsFilter(id);
                    if(!Foods) res.status(500).json({message:"Server Find Foods Error!"});
                    res.status(200).json({message:"ok" , Foods:Foods });
                }else{
                    const Foods = await model.foods();
                    if(!Foods) res.status(500).json({message:"Server Find Foods Error!"});
                    res.status(200).json({message:"ok" , Foods:Foods });
                };
        }catch(error){
            res.status(500).json({message: 'Server Error!'});
        }
    },
    POST : async(req , res) => {
        try{
            const { name , price , id } = req.body
            
            if(!id || !name || !price){
                return res.status(400).json({message : "Bad request!"});
            };
            const image = req.files[0]["filename"];
            
            const newFood = await model.newFood(
                name,
                price,
                image,
                id
            );
            if (!newFood)
                return res.status(500).json({ message: "Server Create Error!" });

            res
                .status(201)
                .json({ message: "Food created!", Food: newFood });
        }catch(error){
            res.status(500).json({message:"Server Error!"})
        };
    },
    UPDATE : async(req , res) => {
        try{
            const { name , price , id } = req.body
            
            if(!id || !name || !price){
                return res.status(400).json({message : "Bad request!"});
            };
            const image = req.files[0]["filename"];
                
            const updateFood = await model.updateFood( 
                name,
                price,
                image,
                id
            );
                if (!updateFood) return res.status(500).json({ message: "Server Update Error!" });
            res
                .status(201)
                .json({ message: "Food update!", Food: updateFood });
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
            const deleteFood = await model.deleteFood(id);
            if(!deleteFood){
                return res.status(400).json({message: "Server delete Food Error!"});
            };

            res.status(200).json({message: "ok" , Food: deleteFood});
        }catch(error){
            res.status(500).json({message: "Server Error!"})
        }
    }
};