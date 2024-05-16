// updateUser.ts
import { Request, Response } from 'express';
import { connection } from '../data/connection';
import { user } from '../types';

export async function putUser(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { email, name, password } = req.body;
        const updatedUser: user = { email, name, password };
        await connection('users').where({ id }).update(updatedUser);
        res.status(200).send({ id, ...updatedUser });
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
}
