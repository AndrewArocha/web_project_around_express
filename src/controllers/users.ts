//Controller for users in src/controllers/users.ts

import type { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'node:path';

const usersFilePath = path.join(import.meta.dirname, '../../data/users.json');

export const getUsers = async (req: Request, res: Response) => {
    // Logic to get users from the database
  try {
    const data = await fs.readFile(usersFilePath, 'utf-8');
    const users = JSON.parse(data);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "An error has ocurred on the server" });
  }
}

export const getUserById = async (req: Request, res: Response) => {
    // Logic to get a user by ID from the database
  try {
    const userId = req.params.id;
    const data = await fs.readFile(usersFilePath, 'utf-8');
    const users = JSON.parse(data);
    
    const user = users.find((u: { _id: string }) => u._id === userId);
    
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User ID not found" }); 
    }
  } catch (error) {
    res.status(500).json({ message: "An error has ocurred on the server" });
  }
}

export const createUser = async (req: Request, res: Response) => {
    // Logic to create a new user in the database
  try {
    const data = await fs.readFile(usersFilePath, 'utf-8');
    const users = JSON.parse(data);
    users.push(req.body);
    await fs.writeFile(usersFilePath, JSON.stringify(users));
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: "An error has ocurred on the server" });
  }
}

