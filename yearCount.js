<script>

var birth = [2020, 1954, 1901, 2049, 2050, 1954, 1970, 1961, 1974, 1989, 1991, 1991, 1992, 1993, 1994, 1995, 2000, 2001, 2001, 2004, 1980, 1983, 1974]
var death = [1999, 1998, 1974, 1995, 1994, 2012, 2020, 2013, 2004, 2029, 2064, 2049, 1996, 1999, 2001, 2039, 2060, 2058, 2059, 2075, 2034, 2049, 2024]

var birth = birth.sort();
var death = death.sort();

var bLength = birth.length;
var firstDeath = death[0];
var alive = 0;
var currentStatus = 0;
var bestYear = 0;
var nextBestYear = 0;
var year = 0;
for (i = 0; birth[i] < firstDeath; i++) {
	alive += 1;
  currentStatus += 1;
}

//for each year left in birth years, loop
//get (length - alive) and count over what is left

var lastBirths = bLength - alive;

for (i = (alive - 1); i < bLength-1; i++) {
	
    if (birth[i] != death[year]) {
    	alive += 1;
        currentStatus += 1;
        bestYear = birth[i];
       
        year += 1;
    } else if (birth[i] > death[year]) {
    	year += 1;
        alive -= 1;
    } else {
        nextBestYear = birth[i];
    }
}

document.write(bestYear);
</script>
