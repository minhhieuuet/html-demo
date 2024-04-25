import express from 'express';
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  res.send('Hello world')
})

app.listen(port, () => {
  //@ts-ignore
  console.log(`Example app listening on port ${port}`)
})