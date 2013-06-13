sync_object =
  GDrive:
    key: "477192000959.apps.googleusercontent.com"
    scope: "https://www.googleapis.com/auth/drive"
    app_name: "chopsticks"
  Dropbox:
    key: "d0s7zl0vy34x10t"
    secret: "fakbfjirmw2wcnm"
    app_name: "chopsticks"

callbacks =
  authorizeDropbox: ->
    Nimbus.Auth.authorize('Dropbox')

  authorizeGDrive: ->
    Nimbus.Auth.authorize('GDrive')

  logout: ->
    Nimbus.Auth.logout()
    $("body").removeClass("slide_left")
    $("#loginModal").addClass("active")

  toggleMenu: ->
    $("body").toggleClass("slide_left")

  createNewEntry: ->
    alert("create new entry")

  focusEditArea: ->
    window.scrollTo(0, 0)

  saveEntry: ->
    alert("save this entry")

  deleteEntry: ->
    alert("delete this entry")

setup_callbacks = (callbacks) ->
  $('#Dropbox_authorize_button').click(callbacks.authorizeDropbox) if callbacks.authorizeDropbox
  $('#GDrive_authorize_button').click(callbacks.authorizeGDrive) if callbacks.authorizeGDrive
  $('#log_out_button').click(callbacks.logout) if callbacks.logout
  $('#menu_button').click(callbacks.toggleMenu) if callbacks.toggleMenu
  $('#create_entry_button').click(callbacks.createNewEntry) if callbacks.createNewEntry
  $('#wirtearea').focus(callbacks.focusEditArea) if callbacks.focusEditArea
  $('#save_entry_button').click(callbacks.saveEntry) if callbacks.saveEntry
  $('#delete_entry_button').click(callbacks.deleteEntry) if callbacks.deleteEntry
  

$ ->
    Nimbus.Auth.setup(sync_object)
    #  Nimbus.Mode.setup()
    setup_callbacks(callbacks)
  
