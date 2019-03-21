<script>
var birth = [1996, 1954, 1901, 2049, 2050, 1954, 1970, 1961, 1975, 1989, 1991, 1991, 1992, 1993, 1994, 1995, 2001, 2001, 1997, 2004, 1980, 1983, 1975]
var death = [1999, 1998, 1974, 1995, 1994, 2012, 2020, 2013, 2004, 2029, 2064, 2049, 1996, 1999, 2001, 2039, 2060, 2058, 2059, 2075, 2034, 2049, 2024]

var birth = birth.sort();
var death = death.sort();

var bLength = birth.length;
var dLength = death.length;
var lastBirth = birth[birth.length -1];
var firstDeath = death[0];
var alive = 0;
var currentStatus = 0;
var bestYear = 0;
var highestPop = 0;
var y = 0;

for (i = 0; birth[i] < firstDeath; i++) {
	alive += 1;
    currentStatus += 1;
    bestYear = birth[i];
}

var lastBirths = bLength - alive;

for (i = alive; i < lastBirths; i++) {
	if (birth[i] == death[i]) {
    	  currentStatus += 1;
        bestYear = birth[i];
        y += 1;
        currentStatus -= 1;
    } else if (birth[i] != death[y] && birth[i] < death[y]) {
        currentStatus += 1;
        bestYear = birth[i];
        highestPop = 
        document.write("<br/>"+"best year yet: " + bestYear + "<br/>");
    } else if (birth[i] > death[y]) {
    	y += 1;
        currentStatus -= 1;
    }
}
document.write("<br/>" + "Birth years: " + birth + "<br/>");
document.write("<br/>" + "Death years: " + death + "<br/>");
document.write("<br/>" + "Best year: " + bestYear);
</script>
