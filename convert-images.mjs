import sharp from "sharp";
import { readdirSync } from "fs";
import { join } from "path";

const folders = [
  "./src/assets/beginner-media",
  "./src/assets/home-media",
  "./src/assets/shared",
  "./src/assets/shop-media",
  "./src/assets/vets-media",
];

folders.forEach((folder) => {
  readdirSync(folder)
    .filter((f) => f.match(/\.(jpg|jpeg|png)$/i))
    .forEach((file) => {
      const input = join(folder, file);
      const output = join(folder, file.replace(/\.(jpg|jpeg|png)$/i, ".webp"));
      sharp(input)
        .webp({ quality: 80 })
        .toFile(output)
        .then(() => console.log(`✅ ${file} → webp`))
        .catch(console.error);
    });
});
