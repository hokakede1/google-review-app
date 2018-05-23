const {sendEmailToResetPassword} = require('./../Mailer/index');

const getUserInfo = (req, res) => {
    res.status(200).send(req.user); 
}

const forgetPassword = async (req, res) => {
    const db = req.app.get("db");
    const {email} = req.body;
    const userFoundByEmail = await db.user_find_available_user_email([email]);
    const responseFromSending = await sendEmailToResetPassword(req, res, userFoundByEmail);
    if(responseFromSending.error){
        res.status(500).send("Some Thing Went Wrong");      
    } else {
        res.status(200).send("Sent Successfully");
    }
}




module.exports = {
    getUserInfo
}