import bcrypt from 'bcrypt';
import {Request, Response} from 'express';
import StatusCodes from 'http-status-codes';

import {JwtService} from '@shared/JwtService';
import {cookieProps, loginFailedErr, paramMissingError} from '@shared/constants';


const jwtService = new JwtService();
const { BAD_REQUEST, OK, UNAUTHORIZED } = StatusCodes;



/**
 * Login in a user.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function login(req: Request, res: Response) {
    // Check email and password present
    const { email, password } = req.body;
    if (!(email && password)) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    // TODO: handle fetch user when auth handling will be added
    // const user = await userDao.getOne(email);

    //TODO: remove tmp data when auth handling will be added
    //tmp data
     const user:any = {};
    if (!user) {
        return res.status(UNAUTHORIZED).json({
            error: loginFailedErr,
        });
    }
    // Check password
    const pwdPassed = await bcrypt.compare(password, user.pwdHash);
    if (!pwdPassed) {
        return res.status(UNAUTHORIZED).json({
            error: loginFailedErr,
        });
    }
    // Setup Admin Cookie
    const jwt = await jwtService.getJwt({
        id: user.id,
        role: user.role,
    });
    const { key, options } = cookieProps;
    res.cookie(key, jwt, options);
    // Return
    return res.status(OK).end();
}


/**
 * Logout the user.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function logout(req: Request, res: Response) {
    const { key, options } = cookieProps;
    res.clearCookie(key, options);
    return res.status(OK).end();
}

