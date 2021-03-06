var layout = $("#layout");
var chat = $("#chat-btn");
var users = $("#users-btn");
var userclick, chatclick;

/* Ensure the status is set right at page load. */
chat.toggleClass("active", layout.hasClass("chat-enabled"));
users.toggleClass("active", layout.hasClass("chat-enabled"));

chat.click(function() {
  if(chatclick) clearTimeout(chatclick);
	layout.toggleClass("chat-enabled");
	chat.toggleClass("active", layout.hasClass("chat-enabled"));
  chatclick = setTimeout(function(){
    windowResized();
  }, 1100);
});

users.click(function() {
  if(userclick) clearTimeout(userclick);
	layout.toggleClass("users-enabled");
	users.toggleClass("active", layout.hasClass("users-enabled"));
  userclick = setTimeout(function() {
    windowResized('users');
  }, 1100);
});
