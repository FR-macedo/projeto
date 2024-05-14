// getUser.ts
import { Request, Response } from 'express';
import { connection } from '../data/connection';

export async function getUser(req: Request, res: Response) {
    try {
        const users = await connection('users').select('*');
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
