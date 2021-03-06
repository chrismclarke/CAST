var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Confidence interval for difference</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Confidence intervals and hypothesis tests are used to assess the difference between the means of two groups.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf1')\">1. Distn of difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The difference between the means of two samples from normal populations has a normal distribution whose mean and s.d. can be found from the population means and s.d.s. This is the approximate distribution even when the populations are non-normal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf_b2')\">2. SE of difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the difference between the sample means is used to estimate the difference between the underlying population means, there is likely to be an error. The error distribution is approximately normal with mean 0. A formula for its standard deviation is given.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf_b3')\">3. CI for difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A 95% confidence interval is given for the difference between two population means. Its properties are demonstrated.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
