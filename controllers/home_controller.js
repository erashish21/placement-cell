//sign out page
module.exports.SignOut = async function (req, res) {
    return req.logout(function(err) {
                if (err) { 
                     console.log("signout nhi hua")
                    return next(err);
      }
    req.flash('success', 'Sign Out SuccessFully');
    return res.redirect('/');
})
}

module.exports.signInPage = function(req , res){
    return res.render('SignIn',{
        title: 'SignPage'
    });
}

//render sin In page 
module.exports.SignIn = async function (req, res) {
    try {
        req.flash('success', 'Sign In SuccessFully');
        return res.redirect('/employee/dashboard');
    } catch (error) {
        return res.send('<h1>Error in SignIn</h1>');
    }
}

//signup page for employee
module.exports.createSessionPage = async function (req, res) {

    return res.render('signUp', {
        title: "Sign Up",
        
    });
}
// sign in and create a session for the user
module.exports.createSession = function(req, res){
    req.flash('success','Logged in Successfully');
    return res.redirect('/employee/dashboard');
}
