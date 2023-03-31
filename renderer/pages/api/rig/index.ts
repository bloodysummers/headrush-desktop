import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  const rigsPath = req.query.path as string
  if (!rigsPath) {
    res.status(400).end('Missing path')
    return
  }
  const rigsFiles = fs.readdirSync(path.resolve(rigsPath, './Rigs'))
  res.status(200).json(rigsFiles)
}
