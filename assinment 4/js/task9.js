// /Q 9 Remove all available HTML tags from given string

text = "<p><strong><em>Only Print This</em></strong></p>";
cleanText = text.replace(/<[^>]*>/g, "");
document.write("With HTML Tags: " + text);
document.write("Clean Output: " + cleanText);

