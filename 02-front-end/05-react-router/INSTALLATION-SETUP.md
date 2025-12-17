# Installation Setup

## React Setup

1. Buat sebuah folder baru dan pastikan isinya kosong
2. Arahkan terminal ke folder baru tersebut
3. Masukkan perintah `npm create vite@latest. `:
   - framework: React
   - variant: TypeScript + React Compiler
   - rolldown-vite: Yes
   - install and start: Yes
4. `ctrl + c` untuk mematikan server
5. `npm run dev` untuk menjalankan server

## React Router Setup

1. Arahkan terminal ke root folder project
2. `npm i react-router`
3. Setup `main.tsx` file dengan setup React Router (See [documentation](https://reactrouter.com/start/declarative/installation))

## Tailwind CSS

1. Jalankan perintah `npm install tailwindcss @tailwindcss/vite` di terminal
2. Buka file `vite.config.ts` dan edit bentuknya menjadi seperti berikut:

   ```ts
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import tailwindcss from "@tailwindcss/vite";

   // https://vite.dev/config/
   export default defineConfig({
     plugins: [
       tailwindcss(),
       react({
         babel: {
           plugins: [["babel-plugin-react-compiler"]],
         },
       }),
     ],
   });
   ```

3. Masukkan `@import "tailwindcss";` di file CSS global (index.css)
4. `npm run dev`
5. Enjoy & start coding CSS
