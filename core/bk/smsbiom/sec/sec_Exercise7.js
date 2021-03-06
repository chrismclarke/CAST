var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread4')\">1. Standard deviation from general knowledge</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, general knowledge about the type of measurement is enough to roughly guess the value of the standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread5')\">2. Rough graph from mean and st devn</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and standard deviation of a data set should give you a good idea of the likely distribution of values. The first exercise in this page asks you to sketch a stacked dot plot to match a given mean and standard deviation. In the second, a histogram should be drawn.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread6')\">3. Clusters and outliers (advanced)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two exercises on this page ask the effect of combining different groups of values or adding an outlier on the mean and standard deviation.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
