import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  const rigsPath = req.query.path as string
  const rigName = req.query.name as string

  if (!rigsPath) {
    res.status(400).end('Missing path')
    return
  }
  if (!rigName) {
    res.status(400).end('Missing name')
    return
  }
  const fileFullPath = path.resolve(rigsPath, 'Rigs', rigName)
  const rigData = JSON.parse(fs.readFileSync(fileFullPath, 'utf-8'))
  const rigContent = JSON.parse(rigData.content)
  res.status(200).json({
    ...rigData,
    content: rigContent
  })
}
