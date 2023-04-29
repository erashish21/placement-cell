module.exports.home = async function(req , res){
    return res.render('Add_student',{
        title: 'Home'
    });
}