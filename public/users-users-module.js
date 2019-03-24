(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/core/guards/can-deactivate.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/guards/can-deactivate.guard.ts ***!
  \*****************************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/messages.service */ "./src/app/core/services/messages.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard(msgService) {
        this.msgService = msgService;
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        if (component.editInProgress) {
            this.msgService.setMessage({
                type: 'warning',
                body: 'Are you sure to leave the page without saving the changes?',
                action: true
            });
            return this.msgService.getSubmit();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
    };
    CanDeactivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/users/user-create/user-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/users/user-create/user-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group {\n  padding: 20px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2VyLWNyZWF0ZS91c2VyLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1ncm91cCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/user-create/user-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/users/user-create/user-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userForm\" (ngSubmit)=\"createUser()\">\n  <section class=\"form-block\">\n    <div class=\"btn-group\">\n      <a (click)=\"goBack()\" class=\"btn btn-icon\">\n        <clr-icon shape=\"undo\"></clr-icon>\n        <span>&nbsp;Back</span>\n      </a>\n    </div>\n    <br/>\n    <label>Create a new employee</label>\n\n    <div class=\"form-group\">\n      <label for=\"firstname\" class=\"required\">First Name</label>\n      <label\n        for=\"firstname\"\n        aria-haspopup=\"true\"\n        role=\"tooltip\"\n        class=\"tooltip tooltip-validation tooltip-sm\"\n        [ngClass]=\"{ invalid: f.firstname.invalid &&\n                     (f.firstname.touched && f.firstname.dirty) }\"\n      >\n        <input\n          type=\"text\"\n          id=\"firstname\"\n          size=\"35\"\n          formControlName=\"firstname\"\n          required\n          autocomplete=\"off\"\n        >\n        <span class=\"tooltip-content\" *ngIf=\"f.firstname.errors?.required\">\n          firstname field cannot be empty\n        </span>\n        <span class=\"tooltip-content\" *ngIf=\"f.firstname.errors?.minlength\">\n          field length > 2\n        </span>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastname\" class=\"required\">Last name</label>\n      <label\n        for=\"lastname\"\n        aria-haspopup=\"true\"\n        role=\"tooltip\"\n        class=\"tooltip tooltip-validation tooltip-sm\"\n        [ngClass]=\"{invalid: f.lastname.invalid &&\n                    (f.lastname.touched && f.lastname.dirty)}\"\n      >\n        <input\n          type=\"text\"\n          id=\"lastname\"\n          size=\"35\"\n          formControlName=\"lastname\"\n          required\n          autocomplete=\"off\"\n        >\n        <span class=\"tooltip-content\" *ngIf=\"f.lastname.errors?.required\">\n          lastname field cannot be empty\n        </span>\n        <span class=\"tooltip-content\" *ngIf=\"f.lastname.errors?.minlength\">\n          field length > 2\n        </span>\n      </label>\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\" class=\"required\">E-mail</label>\n      <label\n        for=\"email\"\n        aria-haspopup=\"true\"\n        role=\"tooltip\"\n        class=\"tooltip tooltip-validation tooltip-sm\"\n        [ngClass]=\"{invalid: f.email.invalid &&\n                    (f.email.touched && f.email.dirty )}\"\n      >\n        <input\n          type=\"email\"\n          id=\"email\"\n          size=\"35\"\n          formControlName=\"email\"\n          required\n          autocomplete=\"off\"\n        >\n        <ng-container *ngIf=\"f.email.invalid\">\n          <span class=\"tooltip-content\" *ngIf=\"f.email.errors?.required\">\n            e-mail field cannot be empty\n          </span>\n          <span class=\"tooltip-content\" *ngIf=\"f.email.errors?.email\">\n            non-valid email format\n          </span>\n        </ng-container>\n      </label>\n\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\" class=\"required\">Password</label>\n      <label\n        for=\"password\"\n        aria-haspopup=\"true\"\n        role=\"tooltip\"\n        class=\"tooltip tooltip-validation tooltip-sm\"\n        [ngClass]=\"{invalid: f.password.invalid &&\n                    (f.password.touched && f.password.dirty )}\"\n      >\n        <input\n          type=\"password\"\n          id=\"password\"\n          size=\"35\"\n          formControlName=\"password\"\n          required\n          autocomplete=\"off\"\n        >\n        <span class=\"tooltip-content\" *ngIf=\"f.password.errors?.required\">\n          password field cannot be empty\n        </span>\n        <span class=\"tooltip-content\" *ngIf=\"f.password.errors?.minlength\">\n          field length > 6\n        </span>\n      </label>\n\n    </div>\n    <button\n      class=\"btn btn-primary\"\n      type=\"submit\"\n      [disabled]=\"userForm.invalid\"\n    >Create employee\n    </button>\n  </section>\n</form>\n"

/***/ }),

/***/ "./src/app/users/user-create/user-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/users/user-create/user-create.component.ts ***!
  \************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/messages.service */ "./src/app/core/services/messages.service.ts");






var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(service, router, msgService) {
        this.service = service;
        this.router = router;
        this.msgService = msgService;
        this.editInProgress = false;
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
            ])
        });
        this.userForm.valueChanges.subscribe(function () {
            if (_this.userForm.touched || _this.userForm.dirty) {
                _this.editInProgress = true;
            }
        });
    };
    Object.defineProperty(UserCreateComponent.prototype, "f", {
        get: function () {
            return this.userForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserCreateComponent.prototype.createUser = function () {
        var _this = this;
        if (this.userForm.invalid) {
            return;
        }
        this.editInProgress = false;
        var user = {
            firstName: this.f.firstname.value,
            lastName: this.f.lastname.value,
            email: this.f.email.value,
            password: this.f.password.value
        };
        this.service.createUser(user)
            .subscribe(function () {
            _this.msgService.setMessage({
                type: 'success',
                body: 'User is successfully created!'
            });
            setTimeout(function () {
                _this.router.navigate(['/users', { action: 'created' }]);
            }, 3000);
        });
    };
    UserCreateComponent.prototype.goBack = function () {
        this.router.navigate(['/users']);
    };
    UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! ./user-create.component.html */ "./src/app/users/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.css */ "./src/app/users/user-create/user-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_messages_service__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/users/user-edit/user-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/users/user-edit/user-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group {\n  padding: 20px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZ3JvdXAge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/users/user-edit/user-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/users/user-edit/user-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userForm\" (ngSubmit)=\"createUser()\" *ngIf=\"user\">\n  <section class=\"form-block\">\n    <div class=\"btn-group\">\n      <a (click)=\"goBack()\" class=\"btn btn-icon\">\n        <clr-icon shape=\"undo\"></clr-icon>\n        <span>&nbsp;Back</span>\n      </a>\n    </div>\n    <br/>\n    <label>Edit employee</label>\n\n    <div class=\"form-group\">\n      <label for=\"firstname\" class=\"required\">First Name</label>\n      <label\n        for=\"firstname\"\n        aria-haspopup=\"true\"\n        role=\"tooltip\"\n        class=\"tooltip tooltip-validation tooltip-sm\"\n        [ngClass]=\"{ invalid: f.firstname.invalid &&\n                     (f.firstname.touched && f.firstname.dirty) }\"\n      >\n        <input\n          type=\"text\"\n          id=\"firstname\"\n          size=\"35\"\n          formControlName=\"firstname\"\n          required\n          autocomplete=\"off\"\n        >\n        <span class=\"tooltip-content\" *ngIf=\"f.firstname.errors?.required\">\n          firstname field cannot be empty\n        </span>\n        <span class=\"tooltip-content\" *ngIf=\"f.firstname.errors?.minlength\">\n          field length > 2\n        </span>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastname\" class=\"required\">Last name</label>\n      <label\n        for=\"lastname\"\n        aria-haspopup=\"true\"\n        role=\"tooltip\"\n        class=\"tooltip tooltip-validation tooltip-sm\"\n        [ngClass]=\"{invalid: f.lastname.invalid &&\n                    (f.lastname.touched && f.lastname.dirty)}\"\n      >\n        <input\n          type=\"text\"\n          id=\"lastname\"\n          size=\"35\"\n          formControlName=\"lastname\"\n          required\n          autocomplete=\"off\"\n        >\n        <span class=\"tooltip-content\" *ngIf=\"f.lastname.errors?.required\">\n          lastname field cannot be empty\n        </span>\n        <span class=\"tooltip-content\" *ngIf=\"f.lastname.errors?.minlength\">\n          field length > 2\n        </span>\n      </label>\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\" class=\"required\">E-mail</label>\n      <label\n        for=\"email\"\n        aria-haspopup=\"true\"\n        role=\"tooltip\"\n        class=\"tooltip tooltip-validation tooltip-sm\"\n        [ngClass]=\"{invalid: f.email.invalid &&\n                    (f.email.touched && f.email.dirty )}\"\n      >\n        <input\n          type=\"email\"\n          id=\"email\"\n          size=\"35\"\n          formControlName=\"email\"\n          required\n          autocomplete=\"off\"\n        >\n        <ng-container *ngIf=\"f.email.invalid\">\n          <span class=\"tooltip-content\" *ngIf=\"f.email.errors?.required\">\n            e-mail field cannot be empty\n          </span>\n          <span class=\"tooltip-content\" *ngIf=\"f.email.errors?.email\">\n            non-valid email format\n          </span>\n        </ng-container>\n      </label>\n\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Password</label>\n      <label\n        for=\"email\"\n        aria-haspopup=\"true\"\n        role=\"tooltip\"\n        class=\"tooltip tooltip-validation tooltip-sm\"\n        [ngClass]=\"{invalid: f.password.invalid &&\n                    (f.password.touched && f.password.dirty )}\"\n      >\n        <input\n          type=\"password\"\n          id=\"password\"\n          size=\"35\"\n          formControlName=\"password\"\n          autocomplete=\"off\"\n        >\n      </label>\n\n    </div>\n    <button\n      class=\"btn btn-primary\"\n      type=\"submit\"\n      [disabled]=\"userForm.invalid || !editInProgress\"\n    >Edit employee\n    </button>\n  </section>\n</form>\n"

/***/ }),

/***/ "./src/app/users/user-edit/user-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/user-edit/user-edit.component.ts ***!
  \********************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/messages.service */ "./src/app/core/services/messages.service.ts");






var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(service, router, activatedRoute, msgService) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.msgService = msgService;
        this.editInProgress = false;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this.service.getUser(id)
                .subscribe(function (user) {
                _this.user = user;
                _this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                    firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](user.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
                    lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](user.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
                    email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](user.email, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
                    ]),
                    password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
                });
                _this.userForm.valueChanges.subscribe(function () {
                    if (_this.userForm.touched || _this.userForm.dirty) {
                        _this.editInProgress = true;
                    }
                });
            });
        });
    };
    Object.defineProperty(UserEditComponent.prototype, "f", {
        get: function () {
            return this.userForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserEditComponent.prototype.createUser = function () {
        var _this = this;
        if (this.userForm.invalid) {
            return;
        }
        this.editInProgress = false;
        this.user.firstName = this.f.firstname.value;
        this.user.lastName = this.f.lastname.value;
        this.user.email = this.f.email.value;
        this.user.password = this.f.password.value;
        this.service.updateUser(this.user)
            .subscribe(function () {
            _this.msgService.setMessage({
                type: 'success',
                body: 'User is successfully edited!'
            });
            setTimeout(function () {
                _this.router.navigate(['/users', _this.user._id]);
            }, 3000);
        });
    };
    UserEditComponent.prototype.goBack = function () {
        this.router.navigate(['/users', this.user._id]);
    };
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/users/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/users/user-edit/user-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_messages_service__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/users/user-single/user-single.component.css":
/*!*************************************************************!*\
  !*** ./src/app/users/user-single/user-single.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group {\n  padding: 20px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1zaW5nbGUvdXNlci1zaW5nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2VyLXNpbmdsZS91c2VyLXNpbmdsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1ncm91cCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/user-single/user-single.component.html":
/*!**************************************************************!*\
  !*** ./src/app/users/user-single/user-single.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <div class=\"clr-row clr-justify-content-center\">\n    <div class=\"clr-col-lg-6 clr-col-12\">\n      <div class=\"btn-group\">\n        <a (click)=\"goBack()\" class=\"btn btn-icon\">\n          <clr-icon shape=\"undo\"></clr-icon>\n          <span>&nbsp;Back</span>\n        </a>\n      </div>\n      <br/>\n      <!--<img-->\n        <!--[src]=\"user.avatar\"-->\n        <!--class=\"img-rounded\"-->\n        <!--[attr.alt]=\"user.firstName + user.lastName\"-->\n        <!--[attr.title]=\"user.firstName + user.lastName\"-->\n      <!--&gt;-->\n      <p>{{ user.firstName }}</p>\n      <p>{{ user.lastName }}</p>\n      <p>{{ user.email }}</p>\n\n      <div class=\"btn-group\">\n        <a [routerLink]=\"['/users', user._id, 'edit']\" class=\"btn btn-primary btn-sm\">Edit</a>\n        <a (click)=\"deleteUser()\" class=\"btn btn-danger btn-sm\">Delete</a>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/users/user-single/user-single.component.ts":
/*!************************************************************!*\
  !*** ./src/app/users/user-single/user-single.component.ts ***!
  \************************************************************/
/*! exports provided: UserSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSingleComponent", function() { return UserSingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/messages.service */ "./src/app/core/services/messages.service.ts");





var UserSingleComponent = /** @class */ (function () {
    function UserSingleComponent(activatedRoute, router, service, messagesService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.service = service;
        this.messagesService = messagesService;
    }
    UserSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this.service.getUser(id)
                .subscribe(function (user) {
                if (user) {
                    _this.user = user;
                }
            }, function (error) {
                _this.messagesService.setMessage({
                    type: 'warning',
                    body: error
                });
                _this.router.navigate(['/users', { action: error }]);
            });
        });
    };
    UserSingleComponent.prototype.deleteUser = function () {
        var _this = this;
        this.service.deleteUser(this.user._id)
            .subscribe(function () {
            _this.router.navigate(['/users', { action: 'deleted' }]);
        });
    };
    UserSingleComponent.prototype.goBack = function () {
        this.router.navigate(['/users']);
    };
    UserSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-single',
            template: __webpack_require__(/*! ./user-single.component.html */ "./src/app/users/user-single/user-single.component.html"),
            styles: [__webpack_require__(/*! ./user-single.component.css */ "./src/app/users/user-single/user-single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]])
    ], UserSingleComponent);
    return UserSingleComponent;
}());



/***/ }),

/***/ "./src/app/users/user.service.ts":
/*!***************************************!*\
  !*** ./src/app/users/user.service.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'api/employees';
    }
    UserService.prototype.getUsers = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json');
        return this.http.get(this.usersUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0));
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.usersUrl + "/" + id);
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.usersUrl, user);
    };
    UserService.prototype.updateUser = function (upUser) {
        return this.http.put(this.usersUrl + "/" + upUser._id, upUser);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.usersUrl + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/users/users-list/users-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-card {\n  cursor: pointer;\n}\n\n.label {\n  display: initial !important;\n}\n\nh2 {\n  margin-bottom: 10px;\n}\n\n.jumbotron {\n  padding: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGFiZWwge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbmgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/users/users-list/users-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"users; else spinner\">\n  <div class=\"jumbotron text-center\">\n    <h2>Users list</h2>\n    <a routerLink=\"/users/create\" class=\"btn btn-sm btn-info\">Create new employee</a>\n  </div>\n\n  <div class=\"clr-row clr-justify-content-center\">\n    <div class=\"clr-col-lg-6 clr-col-12\">\n      <div class=\"card\" *ngFor=\"let user of users; trackBy: trackByMethod\">\n        <div class=\"card-block\">\n          <div class=\"card-media-block wrap\">\n            <img class=\"card-media-image\" [attr.src]=\"getAvatar(user)\"/>\n          </div>\n          <div class=\"card-title\">\n            {{ user.firstName }} {{ user.lastName }}\n          </div>\n          <div class=\"card-text\">\n            {{ user.email }}\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <button class=\"btn btn-sm btn-link\" [routerLink]=\"['/users/', user._id]\">\n            View full\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #spinner>\n  <div class=\"clr-row clr-justify-content-center\">\n    <div class=\"clr-col-lg-6 clr-col-12\">\n      <app-spinner></app-spinner>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/users/users-list/users-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/users/user.service.ts");



var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(service) {
        this.service = service;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    UsersListComponent.prototype.getAvatar = function (user) {
        return "https://ui-avatars.com/api/?name=" + user.firstName + "+" + user.lastName;
    };
    UsersListComponent.prototype.trackByMethod = function (index, item) {
        if (!item) {
            return null;
        }
        return item._id;
    };
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/users/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.css */ "./src/app/users/users-list/users-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/users/users-list/users-list.component.ts");
/* harmony import */ var _user_single_user_single_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-single/user-single.component */ "./src/app/users/user-single/user-single.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/users/user-edit/user-edit.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/users/user-create/user-create.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _core_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/guards/can-deactivate.guard */ "./src/app/core/guards/can-deactivate.guard.ts");










var routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        canActivateChild: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__["UsersListComponent"]
            },
            {
                path: 'create',
                component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_7__["UserCreateComponent"],
                canDeactivate: [_core_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_9__["CanDeactivateGuard"]]
            },
            {
                path: ':id',
                component: _user_single_user_single_component__WEBPACK_IMPORTED_MODULE_5__["UserSingleComponent"]
            },
            {
                path: ':id/edit',
                component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"],
                canDeactivate: [_core_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_9__["CanDeactivateGuard"]]
            }
        ]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/messages.service */ "./src/app/core/services/messages.service.ts");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(activatedRoute, msgService) {
        this.activatedRoute = activatedRoute;
        this.msgService = msgService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            var action = params.get('action');
            if (action === 'created') {
                _this.msgService.setMessage({
                    type: 'success',
                    body: 'User is successfully created!'
                });
            }
            if (action === 'deleted') {
                _this.msgService.setMessage({
                    type: 'info',
                    body: 'User is successfully deleted'
                });
            }
        });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/users/users-list/users-list.component.ts");
/* harmony import */ var _user_single_user_single_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-single/user-single.component */ "./src/app/users/user-single/user-single.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/users/user-edit/user-edit.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/users/user-create/user-create.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _core_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/guards/can-deactivate.guard */ "./src/app/core/guards/can-deactivate.guard.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");















var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersRoutingModule"],
            ],
            declarations: [
                _users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
                _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_7__["UsersListComponent"],
                _user_single_user_single_component__WEBPACK_IMPORTED_MODULE_8__["UserSingleComponent"],
                _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_9__["UserEditComponent"],
                _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_10__["UserCreateComponent"]
            ],
            providers: [
                _user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                _core_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_12__["CanDeactivateGuard"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map