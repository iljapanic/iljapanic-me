import fs from 'fs'
import path from 'path'

const ESSAYS_PATH = path.join(process.cwd(), 'posts', 'essays')

const essayFilePaths = fs
  .readdirSync(ESSAYS_PATH)
  .filter((path) => /\.mdx?$/.test(path))

const NOTES_PATH = path.join(process.cwd(), 'posts', 'notes')

const noteFilePaths = fs
  .readdirSync(NOTES_PATH)
  .filter((path) => /\.mdx?$/.test(path))

const COURSES_PATH = path.join(process.cwd(), 'posts', 'courses')

const courseFilePaths = fs
  .readdirSync(PATTERNS_PATH)
  .filter((path) => /\.mdx?$/.test(path))

const PROJECTS_PATH = path.join(process.cwd(), 'posts', 'projects')

const projectFilePaths = fs
  .readdirSync(PROJECTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))

module.exports = {
  essayFilePaths,
  noteFilePaths,
  projectFilePaths,
  courseFilePaths,
  ESSAYS_PATH,
  NOTES_PATH,
  COURSES_PATH,
  PROJECTS_PATH,
}
