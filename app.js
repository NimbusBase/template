// Generated by CoffeeScript 1.6.2
(function() {
  var callbacks, setup_callbacks, sync_object;

  sync_object = {
    GDrive: {
      key: "477192000959.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/drive",
      app_name: "chopsticks"
    },
    Dropbox: {
      key: "d0s7zl0vy34x10t",
      secret: "fakbfjirmw2wcnm",
      app_name: "chopsticks"
    }
  };

  callbacks = {
    authorizeDropbox: function() {
      return Nimbus.Auth.authorize('Dropbox');
    },
    authorizeGDrive: function() {
      return Nimbus.Auth.authorize('GDrive');
    },
    logout: function() {
      Nimbus.Auth.logout();
      $("body").removeClass("slide_left");
      return $("#loginModal").addClass("active");
    },
    toggleMenu: function() {
      return $("body").toggleClass("slide_left");
    },
    createNewEntry: function() {
      return alert("create new entry");
    },
    focusEditArea: function() {
      return window.scrollTo(0, 0);
    },
    saveEntry: function() {
      return alert("save this entry");
    },
    deleteEntry: function() {
      return alert("delete this entry");
    }
  };

  setup_callbacks = function(callbacks) {
    if (callbacks.authorizeDropbox) {
      $('#Dropbox_authorize_button').click(callbacks.authorizeDropbox);
    }
    if (callbacks.authorizeGDrive) {
      $('#GDrive_authorize_button').click(callbacks.authorizeGDrive);
    }
    if (callbacks.logout) {
      $('#log_out_button').click(callbacks.logout);
    }
    if (callbacks.toggleMenu) {
      $('#menu_button').click(callbacks.toggleMenu);
    }
    if (callbacks.createNewEntry) {
      $('#create_entry_button').click(callbacks.createNewEntry);
    }
    if (callbacks.focusEditArea) {
      $('#wirtearea').focus(callbacks.focusEditArea);
    }
    if (callbacks.saveEntry) {
      $('#save_entry_button').click(callbacks.saveEntry);
    }
    if (callbacks.deleteEntry) {
      return $('#delete_entry_button').click(callbacks.deleteEntry);
    }
  };

  $(function() {
    Nimbus.Auth.setup(sync_object);
    return setup_callbacks(callbacks);
  });

}).call(this);
