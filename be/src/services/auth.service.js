import db from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const hashPassword = (password) =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const registerService = ({
    firstName,
    lastName,
    username,
    password,
    status,
    avatar,
    phone,
    roleId,
}) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOrCreate({
                where: { username },
                defaults: {
                    firstName,
                    lastName,
                    username,
                    password: hashPassword(password),
                    status: 1,
                    avatar: '',
                    phone,
                    roleId: 3,
                },
            });

            const response1 = await db.User.findOne({
                where: { username },
                include: { model: db.Role, attributes: ['name'] },
                nest: true,
                raw: true,
            });
            const token =
                response[1] &&
                jwt.sign(
                    {
                        id: response1.id,
                        firstName: response1.username,
                        role: response1.Role.name,
                    },
                    process.env.SECRET_KEY,
                    { expiresIn: '2d' },
                );

            resolve({
                err: token ? 0 : 2,
                msg: token
                    ? 'Register is successfully'
                    : 'Username has been already used.',
                token: token || null,
            });
        } catch (e) {
            reject(e);
        }
    });

export const loginService = ({ username, password }) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOne({
                where: { username },
                include: { model: db.Role, attributes: ['name'] },
                nest: true,
                raw: true,
            });

            const isCorrectPassword =
                response && bcrypt.compareSync(password, response.password);
            const token =
                isCorrectPassword &&
                jwt.sign(
                    { id: response.id, username: response.username, role: response.Role.name },
                    process.env.SECRET_KEY,
                    { expiresIn: '2d' },
                );
            resolve({
                err: token ? 0 : 2,
                msg: token
                    ? 'Login is successfully'
                    : response
                    ? 'Password is wrong'
                    : 'Username  not found',
                token: token || null,
            });
        } catch (e) {
            reject(e);
        }
    });
