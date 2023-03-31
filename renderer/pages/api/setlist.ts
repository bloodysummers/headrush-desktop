import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  const setlistsPath = req.query.path as string
  if (!setlistsPath) {
    res.status(400).end('Missing path')
    return
  }
  const setlistsFiles = fs.readdirSync(path.resolve(setlistsPath, './Setlists'))
  res.status(200).json(setlistsFiles)
}
