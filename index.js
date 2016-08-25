const rdb = require('rethinkdb')

const opts = { host: 'localhost', port: 28015 }
rdb.connect(opts, (err, conn) => {
  if (err) throw err
  rdb.db('test')
    .tableCreate('tv_shows')
    .run(conn, (err, res) => {
      if (err) throw err
      console.log(res)

      rdb.table('tv_shows')
        .insert({ name: 'Star Trek NG' })
        .run(conn, (err, res) => {
          if (err) throw err
          console.log(res)
          conn.close()
        })
    })
})
