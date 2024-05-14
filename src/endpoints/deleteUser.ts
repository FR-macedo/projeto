// deleteUser.ts
import { Request, Response } from 'express';
import { connection } from '../data/connection';

export async function deleteUser(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await connection('users').where({ id }).del();
        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
