import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const viteConfigPath = resolve(
  process.cwd(),
  "node_modules/vite/dist/node/chunks/config.js"
);

const target = `function optimizeSafeRealPathSync() {
\ttry {
\t\tfs.realpathSync.native(path.resolve("./"));
\t} catch (error$1) {
\t\tif (error$1.message.includes("EISDIR: illegal operation on a directory")) {
\t\t\tsafeRealpathSync = fs.realpathSync;
\t\t\treturn;
\t\t}
\t}
\texec("net use", (error$1, stdout) => {
\t\tif (error$1) return;
\t\tconst lines = stdout.split("\\n");
\t\tfor (const line of lines) {
\t\t\tconst m = parseNetUseRE.exec(line);
\t\t\tif (m) windowsNetworkMap.set(m[2], m[1]);
\t\t}
\t\tif (windowsNetworkMap.size === 0) safeRealpathSync = fs.realpathSync.native;
\t\telse safeRealpathSync = windowsMappedRealpathSync;
\t});
}`;

const replacement = `function optimizeSafeRealPathSync() {
\ttry {
\t\tfs.realpathSync.native(path.resolve("./"));
\t} catch (error$1) {
\t\tif (error$1.message.includes("EISDIR: illegal operation on a directory")) {
\t\t\tsafeRealpathSync = fs.realpathSync;
\t\t\treturn;
\t\t}
\t}
\ttry {
\t\texec("net use", (error$1, stdout) => {
\t\t\tif (error$1) {
\t\t\t\tsafeRealpathSync = fs.realpathSync.native;
\t\t\t\treturn;
\t\t\t}
\t\t\tconst lines = stdout.split("\\n");
\t\t\tfor (const line of lines) {
\t\t\t\tconst m = parseNetUseRE.exec(line);
\t\t\t\tif (m) windowsNetworkMap.set(m[2], m[1]);
\t\t\t}
\t\t\tif (windowsNetworkMap.size === 0) safeRealpathSync = fs.realpathSync.native;
\t\t\telse safeRealpathSync = windowsMappedRealpathSync;
\t\t});
\t} catch {
\t\tsafeRealpathSync = fs.realpathSync.native;
\t}
}`;

if (!existsSync(viteConfigPath)) {
  console.warn(`[patch-vite] Skipped: ${viteConfigPath} not found`);
  process.exit(0);
}

const source = readFileSync(viteConfigPath, "utf8");

if (source.includes(replacement)) {
  console.log("[patch-vite] Already applied");
  process.exit(0);
}

if (!source.includes(target)) {
  console.warn("[patch-vite] Skipped: expected Vite block not found");
  process.exit(0);
}

writeFileSync(viteConfigPath, source.replace(target, replacement), "utf8");
console.log("[patch-vite] Applied Windows EPERM workaround");
