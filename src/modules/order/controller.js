const model = require("./model");
const cartModel = require('../cart/model')

module.exports = {
    GET: async( _, res ) => {
        try{
                const Orders = await model.orders();
                if(!Orders) res.status(500).json({message:"Server Find Orders Error!"});
                res.status(200).json({message:"ok" , Orders:Orders });
            }catch(error){
                res.status(500).json({message: 'Server Error!'});
            };
    },
    GET_ORDER_DETAILS: async(req , res) => {
            try{
                const {id} = req.params
                    if(id){
                        const Order_Details = await model.ordersFilterDetails(id);
                        if(!Order_Details) res.status(500).json({message:"Server Find Order_Details Error!"});
                        res.status(200).json({message:"ok" , Order_Details:Order_Details });
                    }else{
                        const Order_Details = await model.ordersDetails();
                        if(!Order_Details) res.status(500).json({message:"Server Find Order_Details Error!"});
                        res.status(200).json({message:"ok" , Order_Details:Order_Details });
                    };
            }catch(error){
                res.status(500).json({message: 'Server Error!'});
            };
    },
    POST : async(req , res) => {
        try{
            const { name , phone , regionId } = req.body
            
            if(!name || !phone , !regionId){
                return res.status(400).json({message : "Bad request!"});
            };            
            const newOrder = await model.newOrder(
                name,
                phone,
                regionId
            );
            if (!newOrder)
                return res.status(500).json({ message: "Server Create Error!" });
                
                const orderId = newOrder.order_id
                
                const cart = await cartModel.cart();
              
                cart.forEach(async(element) => {
                    console.log("foreach");
                    console.log(element.food_id, element.food_count);
                    const OrderDetails = await model.newOrderDetails(
                        element.food_id,
                        element.food_count,
                        orderId
                    );    
                    return OrderDetails
                });
                const cartDelete = await cartModel.deleteCartAll();
                res
                    .status(201)
                    .json({ message: "Order created!", Order: newOrder });
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
            const deleteOrder = await model.deleteOrder(id);
            if(!deleteOrder){
                return res.status(400).json({message: "Server Delete Order Error!"});
            };

            res.status(200).json({message: "ok" , Order: deleteOrder});
        }catch(error){
            res.status(500).json({message: "Server Error!"})
        }
    }
};