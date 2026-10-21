// 零依赖本地预览：在仓库根目录执行 node scripts/serve.mjs。
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const port = Number(process.env.PORT || 4321);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".md": "text/plain; charset=utf-8",
};

createServer(async (request, response) => {
  try {
    let pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    // 同时支持根路径与 GitHub 项目站点的 /mynote/ 路径。
    if (pathname === "/mynote") {
      response.writeHead(302, { Location: "/mynote/" });
      response.end();
      return;
    }
    if (pathname.startsWith("/mynote/"))
      pathname = pathname.slice("/mynote".length);
    let target = resolve(root, `.${pathname}`);
    if (target !== resolve(root) && !target.startsWith(resolve(root) + sep)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }
    if ((await stat(target)).isDirectory())
      target = resolve(target, "index.html");
    const body = await readFile(target);
    response.writeHead(200, {
      "Content-Type": types[extname(target)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("文件不存在");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Local: http://127.0.0.1:${port}/mynote/`);
  console.log("按 Ctrl+C 停止预览。");
});
