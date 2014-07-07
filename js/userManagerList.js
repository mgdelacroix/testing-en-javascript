var userManager;
var userListActions;

function UserListActions (elm){
  var list = elm;

  function show () {
      list.show();
  }

  function add (value) {
    userManager.add(value);
  }

  function remove (value) {
    userManager.remove(value);
  }

  function load (uppercase) {
    uppercase = uppercase || false;

    list.html("");

    var users = userManager.get();
    var user;

    for(var i = 0; i < users.length; i++) {
      user = users[i];

      if (uppercase) {
        user = user.toUpperCase()
      }

      $('<li>')
        .text(user)
        .appendTo(list);
    }
  }

  function color(newColor) {
    list.find('li').css('color', newColor);
  }

  return {
    show: show,
    add: add,
    load: load,
    remove: remove,
    color: color
  }
};

var userListView = function () {
  userManager = new UserManager();
  userListActions = UserListActions($("#list"));

  $("#show").on('click', userListActions.show);

  $("#load").on('click', function () {
    userListActions.load();
  });

  $("#add").on('click', function () {
    var value = $("#new").val();

    userListActions.add(value);
    userListActions.load();
  });

  $("#list").on("click", "li", function () {
    var value = $(this).text()

    userListActions.remove(value);
    userListActions.load();
  });

  $("#uppercase").on("click", function () {
    userListActions.load(true);
  });

  $("#color").on("change", function () {
    userListActions.color($(this).val());
  });
};
