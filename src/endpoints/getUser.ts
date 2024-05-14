// getUser.ts
import { Request, Response } from 'express';
import { connection } from '../data/connection';

export async function getUser(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const user = await connection('users').where({ id }).first(); 
        if (!user) {
            res.status(404).send({ message: 'User not found' });
        } else {
            res.status(200).send(user);
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
