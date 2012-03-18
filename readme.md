# AJAX TABS
## by:- Aditya Gupta

---
Recreate the tabs example from Homework 4, but instead of the content for all 4 tabs being already on the page, dynamically load each tab’s content when clicked, using AJAX.

##Optional bonus challenges

###My research led me to 2 solutions:

1. http://code.google.com/p/ajax-cache/wiki/HowTo

2. http://davidwalsh.name/cache-ajax

Create a variable that will take the response from the click.

Check if the response is there in the variable,

if yes, then load from variable,

else just load.

1. Avoid extra network usage by saving each AJAX response, so the next time the tab is clicked, the network isn’t accessed, but the content is instead served from the cached version.

Hand In: HTML, CSS, JS