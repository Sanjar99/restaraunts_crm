const model = require("./model");

module.exports = {
    GET: async( _, res ) => {
        try{
                const cart = await model.cart();
                      if(!cart) res.status(500).json({message:"Server Find Cart Error!"});
                        res.status(200).json({message:"ok" , cart:cart });
        }catch(error){
            res.status(500).json({message: 'Server Error!'});
        };
    },
    POST : async(req , res) => {
        try{
            const { id , count } = req.body
            console.log(id, count);
            if(!id || !count){
                return res.status(400).json({message : "Bad request!"});
            };
            const newCart = await model.newCart(
                id,
                count
            );
            if (!newCart)
                return res.status(500).json({ message: "Server Create Error!" });

      res
        .status(201)
        .json({ message: "Cart created!", Cart: newCart });
        }catch(error){
            res.status(500).json({message:"Server Error!"})
        };
    },
    DELETE : async(req , res) => {
        try{
            const {id} = req.body;

            if(!id){
                return res.status(400).json({message: "Bad request!"});
            };
            const deleteCart = await model.deleteCart(id);
        
            if(!deleteCart){
                return res.status(400).json({message: "Server delete Cart Error!"});
            };

            res.status(200).json({message: "ok" , cart: deleteCart})
            

        }catch(error){
            res.status(500).json({message: "Server Error!"})
        }
    }
};