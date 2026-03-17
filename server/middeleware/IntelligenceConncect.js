export function Intelligence(req, res, next){
    
    if (req.user['agent'][0].user_type != 'Intelligence Corps'){
        return res.status(403).json({msg:'You are not alowed to do this action'})
    }
    next()
}