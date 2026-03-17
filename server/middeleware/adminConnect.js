export function adminConnect(req, res, next){
    
    if (req.user['agent'][0].user_type != 'admin'){
        return res.status(403).json({msg:'You are not alowed to do this action'})
    }
    next()
}