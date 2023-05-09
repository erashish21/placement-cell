const Employee = require('../models/employee');
const Student =  require('../models/student');

module.exports.dashboard = async function(req , res){
   let studentList = await Student.find({});
    return res.render('dashboard', {
        title: 'Dashboard',
        studentList:studentList
    });
}
// render the sign up page
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/employee/dashboard');
    }
    return res.render('SignUp', {
        title: "Placement | Sign Up"
    })
}

// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/employee/dashboard');
    }
    return res.render('SignIn', {
        title: "Placement | Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    Employee.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            Employee.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/employee/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}

// sign in and create a session for the user
module.exports.createSession = function(req, res){
    req.flash('success','Logged in Successfully');
    return res.redirect('/employee/dashboard');
}


module.exports.dashboard =  async function(req, res,next){
    if (req.isAuthenticated()){
        let studentList = await Student.find({});
   console.log('This is the student lis',studentList);
    return res.render('employeedashboard', {
        title: 'Dashboard',
        studentList:studentList
    });
       
    }
    return res.redirect('/employee/sign-in', 

    )}
    
module.exports.addStudent = function(req , res){
    return res.render('Add_student',{
        title: 'AddStudent'
    });
}


