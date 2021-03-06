angular.module('ChecklistApp.controllers', [])

/*.controller('LoginCtrl', function(Backand, $state, $rootScope, LoginService){
  var login = this;

  function signin() {
    LoginService.signin(login.email, login.password, login.appName)
        .then(function() {
          $rootScope.$broadcast('authorized');
          $state.go('tab.dashboard');
        }, function(error) {
          console.log(error)
        })
  }

  function signout(){
    LoginService.signout()
        .then(function() {
          $state.go('tab.login');
        })

  }

  login.signin = signin;
  login.signout = signout;
})*/

.controller('ChecklistsCtrl', function(ChecklistsModel, $rootScope) {
	var vm = this;

	function getAll() {

		ChecklistsModel.all()
			.then(function(result){
				vm.data = result.data.data;
			});
	}

  function create(object) {
    ChecklistsModel.create(object)
        .then(function (result) {
          cancelCreate();
          getAll();
        });
  }

  function update(object) {
    ChecklistsModel.update(object.id, object)
        .then(function (result) {
          cancelEditing();
          getAll();
        });
  }

  function deleteObject(id) {
    ChecklistsModel.delete(id)
        .then(function (result) {
          cancelEditing();
          getAll();
        });
  }

  function initCreateForm() {
    vm.newObject = { image_url: '', name: '', description: '' };
  }

  function setEdited(object) {
    vm.edited = angular.copy(object);
    vm.isEditing = true;
  }

  function isCurrent(id) {
    return vm.edited !== null && vm.edited.id === id;
  }

  function cancelEditing() {
    vm.edited = null;
    vm.isEditing = false;
  }

  function cancelCreate() {
    initCreateForm();
    vm.creating = false;
  }

  function startCreate() {
    initCreateForm();
    vm.creating = true;
  }

  function isCreating() {
    return vm.creating;
  }

  vm.data = [];
  vm.edited = null;
  vm.isEditing = false;
  vm.creating = false;
  vm.getAll = getAll;
  vm.create = create;
  vm.update = update;
  vm.delete = deleteObject;
  vm.setEdited = setEdited;
  vm.isCurrent = isCurrent;
  vm.cancelEditing = cancelEditing;
  vm.cancelCreate = cancelCreate;

  vm.startCreate = startCreate;

  vm.isCreating = isCreating;

  initCreateForm();
  getAll();

})


.controller('SingleChecklistCtrl', function(EntriesModel, $rootScope, $stateParams) {
  var vm = this;
  var checklistId = $stateParams.checklistId;

  function getChecklist() {

    EntriesModel.fetch(checklistId)
      .then(function(result){
        vm.data = result.data;
      });
  }

  function create(object) {
    EntriesModel.create(object)
        .then(function (result) {
          getChecklist();
        });
  }

  function update(object) {
    EntriesModel.update(object.id, object)
        .then(function (result) {
          getChecklist();
        });
  }

  function deleteObject(id) {
    EntriesModel.delete(id)
        .then(function (result) {
          getChecklist();
        });
  }


  function initCreateForm() {
    vm.newObject = { checked: false, collection: vm.data.id, name: '' };
  }

  function setEdited(object) {
    vm.edited = angular.copy(object);
    vm.isEditing = true;
  }

  function isCurrent(id) {
    return vm.edited !== null && vm.edited.id === id;
  }

  function cancelEditing() {
    vm.edited = null;
    vm.isEditing = false;
  }

  function cancelCreate() {
    initCreateForm();
    vm.creating = false;
  }

  function startCreate() {
    initCreateForm();
    vm.creating = true;
  }

  function isCreating() {
    return vm.creating;
  }

  vm.data = [];
  vm.edited = null;
  vm.isEditing = false;
  vm.creating = false;
  vm.getChecklist = getChecklist;
  vm.create = create;
  vm.update = update;
  vm.delete = deleteObject;
  vm.setEdited = setEdited;
  vm.isCurrent = isCurrent;
  vm.cancelEditing = cancelEditing;
  vm.cancelCreate = cancelCreate;

  vm.startCreate = startCreate;

  vm.isCreating = isCreating;

  initCreateForm();
  getChecklist();

})