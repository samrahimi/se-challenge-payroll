var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Wave Payroll API");
    });

    //Upload new time report as a CSV
    app.post("/timereports", function(req, res) {
        //TODO: parse the uploaded CSV, store in DB, update affected Pay Reports proactively
        res.status(200).send()
    });

    app.get("/payrollreports", function(req,res) {
        //TODO: query the DB for payroll report data (do the grouping in query)
        //and return reports for all employees, broken out by pay period
        res.status(200).send()
    });

  }
  
  module.exports = appRouter;
  