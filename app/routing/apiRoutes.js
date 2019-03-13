var PeopleData = require("../data/friends");





module.exports = function (app) {


    app.get("/api/people", function (req, res) {
        return res.json(PeopleData);
    });

    app.post("/api/people", function (req, res) {

        var NewPerson = req.body;
        var match;
        var MatchDif = 50;
        console.log(NewPerson);
        for (var i = 0; i< PeopleData.length;i++){
            var Dif = 0;
            for(var x = 0; x <= 9; x++){
                Dif += Math.abs(parseInt(NewPerson.scores[x]) - parseInt(PeopleData[i].scores[x]));
            }
            if (Dif < MatchDif){
                MatchDif = Dif;
                match = PeopleData[i];
            }
        }

        PeopleData.push(NewPerson);

        res.json(match);
    });

};
