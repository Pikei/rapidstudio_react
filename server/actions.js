const link = require('./create_connection')

class Actions {
  
  getMedia(req, res){
    const sql = "SELECT `nazwa`,`link` FROM `platforma`";
    link.query(sql, function (err, result) {
      if (err) throw err;
      return res.json(result)
      });
  }

  getLocations(req, res){
    const sql = "SELECT `miasto`,`adres`,`kodPocztowy` FROM `lokalizacja`";
    link.query(sql, function (err, result) {
      if (err) throw err;
      return res.json(result)
      });
  }

  getJobs(req, res){
    const sql = "SELECT `nazwa`, `poziom`, `lokalizacja` FROM `praca`";
    link.query(sql, function (err, result) {
      if (err) throw err;
      return res.json(result)
      });
  }

  postNewsData(req, res){
    var data = req.body
    const sql = `INSERT INTO newsletter (imie, nazwisko, email) VALUES ('${data.firstName}', '${data.lastName}', '${data.email}')`;
    console.log(data);
    console.log(sql);
    link.query(sql, function (err, result, fields) {
      if (err) return res.status(422).json({message: err.message});
      console.table(result);
      res.status(200).json({result});
    });
  }
}

module.exports = new Actions();
