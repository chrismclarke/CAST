var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Probabilities from tables</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Relationships between categorical variables (or other events) are described by probabilities.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob1')\">1. Joint probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bivariate categorical data are modelled as a sample from a population that consists of pairs of categorical values. The joint probability for any pair of categories is their population proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob2')\">2. Marginal probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The marginal probabilities for a variable are the population proportions for its possible values. They can be found by summing joint probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob3')\">3. Conditional probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Conditional probabilites for a variable are proportions in a sub-population containing a specific value for the other variable. They are found by scaling the joint probabilities in that sub-population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('prob4')\">4. Graphical display of probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Joint, marginal and conditional probabilities can be displayed graphically.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep1')\">5. Association</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two categorical variables, X and Y, are associated (related) when the conditional distribution of Y given X=x is different for different values of x. Knowing the value of X therefore tells you something about Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('indep2')\">6. Independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the conditional distribution of Y is the same for all values of X, the variables are called independent. This special case is of practical importance.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
