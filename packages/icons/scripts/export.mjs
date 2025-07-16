import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"
import fse from "fs-extra"
import shell from "shelljs"

// 在 ES 模块中获取 __dirname 的替代方案
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const svgDir = path.join(__dirname, "../src/svg")
const sketch = path.join(__dirname, "../src/assets/icons.sketch")
const SKETCH_TOOL_DIR = "/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool"

fse.removeSync(svgDir)

async function replaceExtAttrs() {
  console.log("[export]: remove svg fill prop...")
  const files = await fs.readdir(svgDir, "utf8")
  for await (const file of files) {
    const filePath = path.join(svgDir, file)
    let content = await fs.readFile(filePath, "utf8")
    content = content.replace(/fill="[#a-z0-9]*"/gi, "")
    await fs.writeFile(filePath, content, "utf-8")
  }
  console.log("[export]: done")
}

// extract svg from sketch
// should install sketchtool first
// install guide: https://developer.sketchapp.com/guides/sketchtool/
shell.exec(
  `${SKETCH_TOOL_DIR} export slices --formats=svg --overwriting=YES --save-for-web=YES --output=${svgDir} ${sketch}`,
)
await replaceExtAttrs()

process.exit(0)
