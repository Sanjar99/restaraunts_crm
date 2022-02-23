const {verify} = require("../util/jwt");

module.exports = {
    adminAuth : () => {
      try{
        const {tokenreg} = req.headers;
        console.log(tokenreg);
        if(!tokenreg) throw new Error("BAD_REQUEST_TOKEN!");
        
        const {adminId} = verify(token);

        if(!adminId) throw new Error("CANNOT BE ACCESSED!")
        return adminId;
      }catch(error){
          throw new Error("YOU ARE NOT REGISTERED!")
      };
    },
};