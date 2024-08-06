const express= require("express")
const rootcontroller=require("../controllers/rootcontroller");
const router = express.Router();
router.get("/", rootcontroller);
// const router=(req,res)=>{
//     res.send("heyyyyyy")
// }
module.exports = router;