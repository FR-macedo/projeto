import { Request, Response } from 'express';
import { connection } from '../data/connection';
import { user } from '../types'; 

export async function postUser(req: Request, res: Response) {
    try {
        const { email, name, password } = req.body;
        const newUser: user = {email, name, password };
        const result = await connection('users').insert(newUser);
        res.status(201).send({ id: result[0], ...newUser });
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
}