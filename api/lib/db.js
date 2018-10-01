
//normally i wouldn't hard code this but it's fine for a one-off
const connectionString = 'postgresql://postgres:1111@localhost:5432/payroll'
const { Client } = require('pg')

async function testConnection() {
    const client = new Client()

    await client.connect({connectionString: connectionString})
    console.log("connected")
    //const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    //console.log(res.rows[0].message) // Hello world!
    await client.end()
}
testConnection()