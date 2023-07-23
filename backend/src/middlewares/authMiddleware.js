import jwt from 'jsonwebtoken';

const allowedTypes = ['usuario', 'medico', 'mantenedor']

export const verifyToken = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1]

    if(!token){
        return res.status(401).json({message: 'Token no existe'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(498).json({message: 'Token inválido'});
        }

        if(!allowedTypes.includes(decoded.userType)){
            return res.status(403).json({message: 'Acceso denegado'});
        }

        req.user = decoded;
        next();
    })

}

export const getUserType = (req, res) => {
    const token = req.header('Authorization').split(' ')[1]
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        return res.json(decodedToken.userType);
    } catch (error) {
        return res.json(null); //token invalido o inexistente
    }
}
