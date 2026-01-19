# README

## Dependencies List

### Reguler Dependencies

1. Express
2. @prisma/client
3. dotenv
4. @prisma/adapter-pg
5. pg
   `npm i express @prisma/client dotenv @prisma/adapter-pg pg`

### Development Dependencies

1. Typescript
2. @types/node
3. @types/express
4. prisma
5. @types/pg
6. tsx
   `npm i -D typescript @types/node @types/express prisma @types/pg tsx`

## Prisma Commands

1. `npx prisma migrate dev`: sinkronisasi schema prisma dengan database dan dicatat history perubahannya
2. `npx prisma db push`: sama dengan `prisma migrate dev` tapi tidak ada histori perubahan yang dicatat
3. `npx prisma studio`: menampilkan database secara visual menggunakan tampilan dari prisma
4. `npx prisma generate`: generate prisma client
