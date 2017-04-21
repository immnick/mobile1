// the zim server is currently and Amazon EC2 machine
// the domain changes if the server is stopped and started
// this file abstracts the specifics and lets us change the domain in one place
// it should be used externally with ZIM Socket and ZIM Wonder and internally with ZIM Distill
var zimServerDomain = "http://54.237.229.197";
var zimSocketURL  = zimServerDomain + ":3000";
var zimWonderURL  = zimServerDomain + ":3001";
var zimDistillURL = zimServerDomain + ":3002";
