var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Linear model assumptions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem1')\">1. Assumptions in a normal linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The normal linear model involves assumptions of linearity, constant variance, normal error distribution and independence of different observations. Residuals can be examined to assess whether these assumptions are appropriate for a particular data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem2')\">2. Curvature &mdash; transforming X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the relationship between Y and X is nonlinear, a transformation of X may linearise the relationship.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem3')\">3. Curvature and non-constant variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Transforming the response may remove curvature in the relationship, but also affects whether the error standard deviation is constant. Fortunately, the same transformation of Y often removes curvature and non-constant standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem4')\">4. Transformations and prediction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a normal linear model describes the relationship between a transformation of the response and a transformation of the explanatory variable, predictions can be made by fitting the linear model to the transformed data, then performing the inverse transformation on the prediction.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem6')\">5. Non-normal errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The errors in a normal linear model are assumed to have normal distributions. Violation of this assumption is less important than nonlinearity, non-constant variance or outliers, but a probability plot of the residuals can be used to assess normality.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnProblem7')\">6. Correlated errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The errors in a normal linear model are assumed to be independent. In data where the observations are recorded sequentially, successive errors are sometimes found to be correlated. Correlated errors can arise whatever the x-variable, but are most often seen when the x-variable is time itself.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";