const Employee = require('../models/employee');
//sign in page for employee
module.exports.SignInPage = async function (req, res) {
    return res.render('SignIn', {
        title: "SignIn"
    });
}
module.exports.SignIn = async function (req, res) {
    try {
        req.flash('success', 'Sign In SuccessFully');
        return res.redirect('/employee/dashboard');
    } catch (error) {
        return res.send('<h1>Error in SignIn</h1>');
    }
}
// sign up page for employee
module.exports.createSessionPage = async function (req, res) {
    return res.render('SignUp',{
        title: "Placement | Home",
    });

   
}
module.exports.createSession = function(req, res){
    req.flash('success','Logged in Successfully');
    return res.redirect('/');
}



module.exports.SignOut = function (req, res) {
    req.logout(function(err) {
      if (err) {
        // Handle error
        req.logout();
      } else {
        req.flash('success', 'Sign Out Successfully');
        return res.redirect('/');
      }
    });
  };
  