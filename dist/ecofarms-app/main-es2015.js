(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxFlexFill>\r\n  <app-header></app-header>\r\n  <div fxFlex>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <app-footer> </app-footer>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-create/employee-create.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-create/employee-create.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center\">\r\n  <div class=\"col-md-4 register-employee\">\r\n    <!-- form card register -->\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputName\">Name</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"name\">\r\n          <!-- error -->\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.name.errors?.required\">\r\n            Name is required.\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail3\">Email</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"email\">\r\n          <!-- error -->\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.required\">\r\n            Enter your email.\r\n          </div>\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.pattern\">\r\n            Enter valid email.\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputPassword3\">Designation</label>\r\n          <select class=\"custom-select form-control\" (change)=\"updateProfile($event.target.value)\"\r\n            formControlName=\"designation\">\r\n            <option value=\"\">Choose...</option>\r\n            <option *ngFor=\"let employeeProfile of EmployeeProfile\" value=\"{{employeeProfile}}\">{{employeeProfile}}\r\n            </option>\r\n          </select>\r\n          <!-- error -->\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.designation.errors?.required\">\r\n            Choose designation.\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputVerify3\">Mobile No</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\">\r\n          <!-- error -->\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.required\">\r\n            Enter your phone number.\r\n          </div>\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.pattern\">\r\n            Enter Numbers Only\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Register</button>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div><!-- form card register -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-edit/employee-edit.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-edit/employee-edit.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"row justify-content-center\">\r\n   <div class=\"col-md-4 register-employee\">\r\n     <!-- form card register -->\r\n     <div class=\"card card-outline-secondary\">\r\n       <div class=\"card-header\">\r\n         <h3 class=\"mb-0\">Edit Employee</h3>\r\n       </div>\r\n       <div class=\"card-body\">\r\n         <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n           <div class=\"form-group\">\r\n             <label for=\"inputName\">Name</label>\r\n             <input class=\"form-control\" type=\"text\" formControlName=\"name\">\r\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.name.errors?.required\">\r\n               Name is required.\r\n             </div>\r\n           </div>\r\n           <div class=\"form-group\">\r\n             <label for=\"inputEmail3\">Email</label>\r\n             <input class=\"form-control\" type=\"text\" formControlName=\"email\">\r\n             <!-- error -->\r\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.required\">\r\n               Enter your email.\r\n             </div>\r\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.pattern\">\r\n               Enter valid email.\r\n             </div>\r\n           </div>\r\n\r\n           <div class=\"form-group\">\r\n             <label for=\"inputPassword3\">Designation</label>\r\n             <select class=\"custom-select form-control\" (change)=\"updateProfile($event.target.value)\"\r\n               formControlName=\"designation\">\r\n               <option value=\"\">Choose...</option>\r\n               <option *ngFor=\"let employeeProfile of EmployeeProfile\" value=\"{{employeeProfile}}\">{{employeeProfile}}\r\n               </option>\r\n             </select>\r\n             <!-- error -->\r\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.designation.errors?.required\">\r\n               Choose designation.\r\n             </div>\r\n           </div>\r\n\r\n           <div class=\"form-group\">\r\n             <label for=\"inputVerify3\">Mobile No</label>\r\n             <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\">\r\n             <!-- error -->\r\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.required\">\r\n               Enter your phone number.\r\n             </div>\r\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.pattern\">\r\n               Enter Numbers Only\r\n             </div>\r\n           </div>\r\n\r\n           <div class=\"form-group\">\r\n             <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Update</button>\r\n           </div>\r\n         </form>\r\n       </div>\r\n     </div><!-- form  -->\r\n   </div>\r\n </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-list/employee-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-list/employee-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <!-- No data message -->\r\n  <p *ngIf=\"Employee.length <= 0\" class=\"no-data text-center\">There is no employee added yet!</p>\r\n\r\n  <!-- Employee list -->\r\n  <table class=\"table table-bordered\" *ngIf=\"Employee.length > 0\">\r\n    <thead class=\"table-success\">\r\n      <tr>\r\n        <th scope=\"col\">Employee ID</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Email</th>\r\n        <th scope=\"col\">Designation</th>\r\n        <th scope=\"col\">Phone No</th>\r\n        <th scope=\"col center\">Update</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let employee of Employee; let i = index\">\r\n        <th scope=\"row\">{{employee._id}}</th>\r\n        <td>{{employee.name}}</td>\r\n        <td>{{employee.email}}</td>\r\n        <td>{{employee.designation}}</td>\r\n        <td>{{employee.phoneNumber}}</td>\r\n        <td class=\"text-center edit-block\">\r\n          <span class=\"edit\" [routerLink]=\"['/edit-employee/', employee._id]\">\r\n            <button type=\"button\" class=\"btn btn-success btn-sm\">Edit</button>\r\n          </span>\r\n          <span class=\"delete\" (click)=\"removeEmployee(employee, i)\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/farm-details/farm-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/farm-details/farm-details.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" style=\"justify-content: space-evenly\">\n    <div fxLayout=\"column\" style=\"justify-content: space-around\" fxLayoutGap=\"10px\">\n        <!-- (click)=\"goToFarmDetails(member._id)\" *ngFor=\"let member of farms\" -->\n\n        <mat-card>\n            <mat-card-title>{{farm?.name}}</mat-card-title>\n            <mat-card-subtitle>{{farm?.region}}\n            </mat-card-subtitle>\n            <mat-card-content>\n                <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"bottom\"\n                    ngbTooltip=\"Tooltip on top\">\n                    Tooltip on top\n                </button>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card>\n            <mat-card-title><span style=\"color: #F6A030;\">Présentation par EcoFarms</span>\n            </mat-card-title>\n            <mat-card-content>\n                {{farm?.description}}\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card>\n            <mat-card-title><span style=\"color: #F6A030;\">Informations générales</span> </mat-card-title>\n            <mat-accordion>\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <!-- TODO arrow Circle down  -->\n                            <span class=\"material-icons-outlined\">\n                                arrow_circle_down\n                                </span>\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <table>\n                        <tr>\n                            <td><b>Surface</b></td>\n                            <td> {{farm?.surface}}</td>\n                        </tr>\n                        <tr>\n                            <td><b>Cultures</b></td>\n                            <td> {{farm?.cultures}}</td>\n                        </tr>\n                        <tr>\n                            <td><b>Nombre d'employés </b></td>\n                            <td>{{farm?.employees}} </td>\n                        </tr>\n                        <tr>\n                            <td><b>Activités</b></td>\n                            <td> {{farm?.activities}}</td>\n                        </tr>\n                        <tr>\n                            <td><b>EcoFarm</b></td>\n                            <td> </td>\n                        </tr>\n                        <tr>\n                            <td><b>Certification</b></td>\n                            <td>{{farm?.certification}} </td>\n                        </tr>\n                    </table>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </mat-card>\n\n        <mat-card style=\"background-color:#f1d4ad;padding:5px;\">\n            <mat-card-title><span style=\"color: #F6A030;\">Détails des scores</span>\n            </mat-card-title>\n            <mat-card-content>\n                <mat-accordion>\n                    <mat-expansion-panel hideToggle>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Exemple de dimension\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                table des notes\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        <p>Doit contenir</p>\n                    </mat-expansion-panel>\n                </mat-accordion>\n            </mat-card-content>\n        </mat-card>\n\n    </div>\n    <div style=\"justify-content: center\">\n        <mat-card class=\"mat-elevation-z4\">\n            <mat-card-header>\n                <mat-card-title>Indice de durabilité</mat-card-title>\n                <mat-card-subtitle>\n                    <div class=\"circle\">\n                        <span style=\"color: #F6A030;font-weight: bold; font-size: large;\"> {{farm?.score}} /100</span>\n                        <!-- <div class=\"appreciation \">\n                                Bon\n                            </div> -->\n                    </div>\n                    &nbsp;\n                    <div>\n                        <mat-progress-bar placement=\"top\" tooltipClass=\"my-custom-class\" ngbTooltip=\"score minimale EcoFarms est 40, Score de la ferme {{farm?.score}}\" [color]=\"'warn'\"\n                            [bufferValue]=\"40\" [mode]=\"'buffer'\" [value]=\"scoreProgress\">\n                        </mat-progress-bar>\n                    </div>\n                </mat-card-subtitle>\n            </mat-card-header>\n            <!-- <img mat-card-image *ngIf=\"member.photo && member.photo.imageBase64\"\n                [src]=\"sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + member.photo.imageBase64)\"\n                alt=\"Photo of {{member.title}}\"> -->\n            <mat-card-content>\n                <p>\n                    Description\n                </p>\n            </mat-card-content>\n            <mat-card-actions>\n                <button mat-button>LIKE</button>\n                <button mat-button>SHARE</button>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/farm-list/farm-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/farm-list/farm-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"filterForm\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around\">\n        <div fxLayout.xs=\"column\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" ngClass.gt-xs=\"ml-10\">\n            <div>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Régions</mat-label>\n                    <mat-select formControlName=\"region\" (selectionChange)=\"manageChips($event.value,'region')\"\n                        multiple>\n                        <mat-option class=\"not-empty-select\" *ngFor=\"let region of regionList\" [value]=\"region\">\n                            {{region}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Productions</mat-label>\n                    <mat-select formControlName=\"productions\" (selectionChange)=\"manageChips($event.value,'production')\"\n                        multiple>\n                        <mat-option class=\"not-empty-select\" *ngFor=\"let production of productionList\"\n                            [value]=\"production\">\n                            {{production}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n\n            <div class=\"test-div\">\n                <button type=\"button\" class=\"btn btn-warning\" (click)=\"openScoreDialog()\">Score</button>\n\n            </div>\n            <div>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Activités</mat-label>\n                    <mat-select formControlName=\"activities\" (selectionChange)=\"manageChips($event.value,'activite')\"\n                        multiple>\n                        <mat-option class=\"not-empty-select\" *ngFor=\"let activite of activiteList\" [value]=\"activite\">\n                            {{activite}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n\n            <div>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Vente Directe</mat-label>\n                    <mat-select formControlName=\"ventesDirectes\" (selectionChange)=\"manageChips($event.value,'vente')\"\n                        multiple>\n                        <mat-option class=\"not-empty-select\" *ngFor=\"let vd of vdList\" [value]=\"vd\">{{vd.title}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n\n            <div>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Réseaux</mat-label>\n                    <mat-select formControlName=\"reseaux\" (selectionChange)=\"manageChips($event.value,'reseau')\"\n                        multiple>\n                        <mat-option class=\"not-empty-select\" *ngFor=\"let reseau of reseaux$ | async\"\n                            [value]=\"reseau.name\">\n                            {{reseau.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"div-button-recherche\">\n                <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"onFormSubmit()\">Rechercher</button>\n            </div>\n            <div>\n                <i class=\"material-icons\">cloud_upload</i>\n            </div>\n        </div>\n    </div>\n\n\n    <div>\n        <mat-form-field class=\"example-chip-list\">\n            <mat-label>Critères de recherche</mat-label>\n            <mat-chip-list #chipList aria-label=\"Critères de recherche\" multiple>\n                <mat-chip *ngFor=\"let keyword of keywords\">\n                    {{keyword}}\n                </mat-chip>\n                <input [matChipInputFor]=\"chipList\" (matChipInputTokenEnd)=\"manageChips($event.value,'')\"\n                    [disabled]=\"true\">\n            </mat-chip-list>\n        </mat-form-field>\n    </div>\n    <div class=\"div-slide-toogle\">\n        <mat-slide-toggle [color]=\"'warn'\" (click)=\"onToogleMap()\"> {{isChecked == true ? \"Masquer la carte\" : \"Afficher la carte\"}}\n        </mat-slide-toggle>\n    </div>\n\n    <div fxLayout=\"row\">\n        <div fxLayout.xs=\"column\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" ngClass.gt-xs=\"ml-10\">\n            <mat-card fxFlex.sm=\"0 1 calc(50%-10px)\" fxFlex.md=\"0 1 calc(33%-10px)\" fxFlex.gt-md=\"0 1 calc(25%-10px)\"\n                (click)=\"goToFarmDetails(member._id)\" *ngFor=\"let member of farms\">\n                <mat-card-title>{{member.name}}</mat-card-title>\n                <mat-card-subtitle><span style=\"color: #F6A030;font-weight: bold;\"> {{member.score}} /\n                        100</span></mat-card-subtitle>\n                <img mat-card-image *ngIf=\"member.photo && member.photo.imageBase64\"\n                    [src]=\"sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + member.photo.imageBase64)\"\n                    alt=\"Photo of {{member.title}}\">\n                <mat-card-content>\n                    {{member.description}}\n                </mat-card-content>\n                <mat-divider></mat-divider>\n                <mat-card-actions>\n                    <div>\n                        <i class=\"material-icons\">location_on</i>\n                        {{member.localisation}}\n                    </div>\n                    <div>\n                        <img src=\"assets/sprout2.png\" width=\"20\" height=\"20\" />\n                        {{member.productions}}\n                    </div>\n                </mat-card-actions>\n\n            </mat-card>\n        </div>\n        <div *ngIf=\"isChecked\" fxFlex=\"50\" style=\"padding: 2%;\">\n            <google-map height=\"600px\"></google-map>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/first-page/first-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/first-page/first-page.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n    <div class=\"center-align\" style=\"margin-top: 50px;\">\n        <img src=\"/assets/farmer.ice.png\" alt=\"fermier illustration\" width=\"70\" />\n\n        <h5> <b><span style=\"color: #F6A030;\">La carte </span>EcoFarms </b> </h5>\n\n        <h5 style=\"margin-top: 40px;\">Découvrez les agriculteurs <br />\n            <span style=\"color: #F6A030;\">en accord avec vos valeurs et à côté de vous !</span>\n        </h5>\n        <h6 style=\"margin-top: 40px;\">Où êtes vous ? </h6>\n\n        <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\">\n                <mat-label>Région</mat-label>\n                <input type=\"text\" placeholder=\"Veuillez choisir la région souhaité\" aria-label=\"Region\" matInput\n                    [formControl]=\"region\" [matAutocomplete]=\"auto\">\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let reg of filteredRegions | async\" [value]=\"reg\">\n                        {{reg}}\n                    </mat-option>\n                </mat-autocomplete>\n            </mat-form-field>\n            &nbsp;\n        </form>\n        <button mat-raised-button color=\"primary\" (click)=\"onFormSubmit()\">Rechercher</button>\n\n    </div>\n\n    <div class=\"row\" style=\"margin-top: 80px;\">\n\n        <div class=\"col xs12 s12 m12 l4\">\n            <img src=\"/assets/gardener.png\" alt=\"agriculteur engagés\" width=\"50\">\n            <h6><b>Des agriculteurs <br /> <span style=\"color: #F6A030;\">engagés</span></b></h6>\n            <div>\n                <b>Maraîchers, Arboriculteurs, Viticulteurs, <br />Apiculteurs, ...</b>\n            </div>\n        </div>\n\n        <div class=\"col xs12 s12 m12 l4\">\n            <img src=\"/assets/sprout.png\" alt=\"sprout\" width=\"50\">\n            <h6><b>Des exploitations <br /> <span style=\"color: #F6A030;\">responsables et transparentes</span></b></h6>\n            <div>Une ecofarm est une exploitation <br>agricole qui répond à<b> des seuils de <br>durabilité élevés et\n                    engagés dans une <br>démarche de progrès. </b></div>\n        </div>\n\n        <div class=\"col xs12 s12 m12 l4\">\n            <img src=\"/assets/apple_heart.png\" alt=\"apple heart\" width=\"50\">\n\n            <h6><b>Les impacts <br /> <span style=\"color: #F6A030;\">sur le monde</span></b></h6>\n            <div>\n                On vous aide à <b>choisir les agriculteurs <br>en accord avec vos convictions.</b>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"center-align\" style=\"margin-top: 80px; margin-bottom:80px\">\n        <img src=\"/assets/logoRondTransparent.png\" alt=\"ecofarms logo\" width=\"50\" />\n        <h5><b> Pourquoi EcoFarms propose cette carte ? <br /></b></h5>\n        <p>EcoFarms répond au besoin des <b>agriculteurs d’être mieux valorisés pour leurs engagements</b> et à celui\n            des\n            <b>consommateurs d’avoir une consommation éclairée et responsable.</b>\n        </p>\n        <div class=\"row\">\n            <div class=\"col xs12 s12 m6 l6\">\n                <p class=\"left-align\">\n                    L’un des <b>problèmes principaux de notre système\n                        agroalimentaire est son opacité.</b>\n                    S’appuyant sur une prolifération de labels et de\n                    généralités trompeuses, il est bien souvent compliqué de\n                    connaître les véritables impacts des produits que l’on\n                    achète.\n                </p>\n            </div>\n            <div class=\"col xs12 s12 m6 l6\">\n                <p class=\"left-align\">\n                    <b><span style=\"color: #F6A030;\">La carte </span>EcoFarms </b> est un moteur de recherche qui\n                    permet de <b>découvrir et comprendre l’histoire et les\n                        impacts des exploitations agricoles </b>référencées. Les\n                    résultats sont issus de l’évaluation experte et\n                    indépendante que nous faisons de celles-ci.\n                </p>\n            </div>\n\n\n        </div>\n\n        <a href=\"https://ecofarms.co/\" class=\"btn waves-effect waves-light green lighten-2\"\n            style=\"border-radius: 22px;\">\n            Découvrir EcoFarms\n        </a>\n    </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-top shadow-sm\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around\">\n    <div fxLayout.xs=\"column\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" ngClass.gt-xs=\"ml-10\">\n      <div>\n        <img src=\"/assets/logoRondTransparent.png\" alt=\"ecofarms logo\" width=\"50\" />\n      </div>\n\n      <div>\n        <span><br>EcoFarms accompagnent et <br> valorisent\n          les acteurs qui s’engagent<br> pour\n          une agriculture durable.</span>\n      </div>\n\n      <div>\n        <h5>À propos</h5>\n        <ul>\n          <li><a href=\"#!\" style=\"color: black;\">EcoFarms</a></li>\n          <li><a href=\"#!\" style=\"color: black;\">Notre méthodologie d’évaluation</a></li>\n        </ul>\n      </div>\n\n      <div>\n        <h5>Retrouvez-nous</h5>\n        <ul>\n          <li><a href=\"#!\" style=\"color: black;\">LinkedIn</a></li>\n          <li><a href=\"#!\" style=\"color: black;\">Facebook</a></li>\n        </ul>\n      </div>\n\n      <div>\n        <h5>Contactez-nous</h5>\n        <ul>\n          <li><a href=\"#!\" style=\"color: black;\">contact@ecofarms.co</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n<div fxLayout=\"row\" fxLayoutAlign=\"space-around\">\n    <div fxLayout.xs=\"column\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" ngClass.gt-xs=\"ml-10\">\n      <div class=\"nav-wrapper\">\n        <a id=\"logo-container\" href=\"https://ecofarms.co/\" class=\"brand-logo\">\n          <img src=\"/assets/EcoFarmsHorizontal.png\" alt=\"Ecofarms logo\" width=\"200\" />\n        </a>\n      </div>\n      <div>\n        <nav class=\"my-2 my-md-0 mr-md-3\">\n          <a class=\"btn\" routerLinkActive=\"active\" routerLink=\"/employees-list\">La carte Ecofarms</a>\n          <a href=\"#\" class=\"btn\" style=\"color: #F6A030;\" routerLinkActive=\"active\" routerLink=\"/create-employee\">Devenir Ecofarm</a>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/score-dialog/score-dialog.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/score-dialog/score-dialog.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Veuillez selectionner le score</h1>\n<div class=\"cn\">\n  <div>\n    <mat-slider thumbLabel [displayWith]=\"formatLabel\" tickInterval=\"1000\" step=\"10\" min=\"0\" max=\"100\"\n      aria-label=\"units\" (change)=\"updateSetting($event)\">\n    </mat-slider>\n  </div>\n  <div>\n    {{score}}\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-raised-button color=\"warn\" (click)=\"onNoClick(true)\">Confimer</button>\n  <button mat-raised-button color=\"warn\" (click)=\"onNoClick(false)\">Annuler</button>\n</div>\n<!-- \n<div mat-dialog-content class=\"left-middle\">\n  Confirmez-vous la suppression de {{nomFichier}} ?\n</div>\n\n<div class=\"right\">\n  <button mat-raised-button color=\"warn\" (click)=\"onNoClick(true)\">Oui</button><br><br>\n  <button mat-raised-button (click)=\"onNoClick(false)\">Non</button>\n</div> -->");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_farm_details_farm_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/farm-details/farm-details.component */ "./src/app/components/farm-details/farm-details.component.ts");
/* harmony import */ var _components_farm_list_farm_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/farm-list/farm-list.component */ "./src/app/components/farm-list/farm-list.component.ts");
/* harmony import */ var _components_first_page_first_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/first-page/first-page.component */ "./src/app/components/first-page/first-page.component.ts");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'bienvenue' },
    { path: 'bienvenue', component: _components_first_page_first_page_component__WEBPACK_IMPORTED_MODULE_5__["FirstPageComponent"] },
    {
        path: 'fermes', component: _components_farm_list_farm_list_component__WEBPACK_IMPORTED_MODULE_4__["FarmListComponent"]
    },
    { path: 'fermes/:id', component: _components_farm_details_farm_details_component__WEBPACK_IMPORTED_MODULE_3__["FarmDetailsComponent"] }
];
// { path: 'create-employee', component: EmployeeCreateComponent },
// { path: 'edit-employee/:id', component: EmployeeEditComponent },
// { path: 'employees-list', component: EmployeeListComponent }
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n@font-face {\r\n  font-family: Averta;\r\n  src: url(/Averta/Averta.woff);\r\n}\r\n\r\n@font-face {\r\n  font-family: TiemposHeadline-Medium;\r\n  src: url(/Tiempos_Headline/TiemposHeadline-Medium.otf);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxzREFBc0Q7QUFDeEQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBBdmVydGE7XHJcbiAgc3JjOiB1cmwoL0F2ZXJ0YS9BdmVydGEud29mZik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBUaWVtcG9zSGVhZGxpbmUtTWVkaXVtO1xyXG4gIHNyYzogdXJsKC9UaWVtcG9zX0hlYWRsaW5lL1RpZW1wb3NIZWFkbGluZS1NZWRpdW0ub3RmKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ecofarms-app';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.contants.ts":
/*!*********************************!*\
  !*** ./src/app/app.contants.ts ***!
  \*********************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * Variable globale pour savoir si la page est en cours de chargement.
 * Utile por le spinner
 *
 * @export
 * @class Globals
 */
let Globals = class Globals {
    constructor() {
        // Boolean permet de savoir si la page est en cours de chargement
        this.loading = false;
    }
};
Globals.SEARCH_FORM_STATE_KEY = "filtreRecherche";
Globals = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Globals);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employee-create/employee-create.component */ "./src/app/components/employee-create/employee-create.component.ts");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/employee-edit/employee-edit.component */ "./src/app/components/employee-edit/employee-edit.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared-components/footer/footer.component */ "./src/app/shared-components/footer/footer.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared-components/header/header.component */ "./src/app/shared-components/header/header.component.ts");
/* harmony import */ var _components_first_page_first_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/first-page/first-page.component */ "./src/app/components/first-page/first-page.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _components_farm_list_farm_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/farm-list/farm-list.component */ "./src/app/components/farm-list/farm-list.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _components_farm_details_farm_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/farm-details/farm-details.component */ "./src/app/components/farm-details/farm-details.component.ts");
/* harmony import */ var _shared_components_score_dialog_score_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared-components/score-dialog/score-dialog.component */ "./src/app/shared-components/score-dialog/score-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");














//Material Imports






















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeCreateComponent"],
            _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeListComponent"],
            _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeEditComponent"],
            _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _components_first_page_first_page_component__WEBPACK_IMPORTED_MODULE_12__["FirstPageComponent"],
            _components_farm_list_farm_list_component__WEBPACK_IMPORTED_MODULE_18__["FarmListComponent"],
            _components_farm_details_farm_details_component__WEBPACK_IMPORTED_MODULE_23__["FarmDetailsComponent"],
            _shared_components_score_dialog_score_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ScoreDialogComponent"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__["NgbTooltip"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__["NgbDropdown"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_34__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_33__["FlexLayoutModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_32__["GoogleMapsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"]
        ],
        providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtY3JlYXRlL2VtcGxveWVlLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmployeeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreateComponent", function() { return EmployeeCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let EmployeeCreateComponent = class EmployeeCreateComponent {
    constructor(fb, router, ngZone, apiService) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.submitted = false;
        this.EmployeeProfile = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
        this.mainForm();
    }
    ngOnInit() { }
    mainForm() {
        this.employeeForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]]
        });
    }
    // Choose designation with select dropdown
    updateProfile(e) {
        this.employeeForm.get('designation').setValue(e, {
            onlySelf: true
        });
    }
    // Getter to access form control
    get myForm() {
        return this.employeeForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (!this.employeeForm.valid) {
            return false;
        }
        else {
            this.apiService.createEmployee(this.employeeForm.value).subscribe((res) => {
                console.log('Employee successfully created!');
                this.ngZone.run(() => this.router.navigateByUrl('/employees-list'));
            }, (error) => {
                console.log(error);
            });
        }
    }
};
EmployeeCreateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
EmployeeCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./employee-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-create/employee-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./employee-create.component.css */ "./src/app/components/employee-create/employee-create.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], EmployeeCreateComponent);



/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtZWRpdC9lbXBsb3llZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let EmployeeEditComponent = class EmployeeEditComponent {
    constructor(fb, actRoute, apiService, router) {
        this.fb = fb;
        this.actRoute = actRoute;
        this.apiService = apiService;
        this.router = router;
        this.submitted = false;
        this.EmployeeProfile = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
    }
    ngOnInit() {
        this.updateEmployee();
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.getEmployee(id);
        this.editForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]]
        });
    }
    // Choose options with select-dropdown
    updateProfile(e) {
        this.editForm.get('designation').setValue(e, {
            onlySelf: true
        });
    }
    // Getter to access form control
    get myForm() {
        return this.editForm.controls;
    }
    getEmployee(id) {
        this.apiService.getEmployee(id).subscribe(data => {
            this.editForm.setValue({
                name: data['name'],
                email: data['email'],
                designation: data['designation'],
                phoneNumber: data['phoneNumber'],
            });
        });
    }
    updateEmployee() {
        this.editForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (!this.editForm.valid) {
            return false;
        }
        else {
            if (window.confirm('Are you sure?')) {
                let id = this.actRoute.snapshot.paramMap.get('id');
                this.apiService.updateEmployee(id, this.editForm.value)
                    .subscribe(res => {
                    this.router.navigateByUrl('/employees-list');
                    console.log('Content updated successfully!');
                }, (error) => {
                    console.log(error);
                });
            }
        }
    }
};
EmployeeEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EmployeeEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./employee-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-edit/employee-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./employee-edit.component.css */ "./src/app/components/employee-edit/employee-edit.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], EmployeeEditComponent);



/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");



let EmployeeListComponent = class EmployeeListComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.Employee = [];
        this.readEmployee();
    }
    ngOnInit() { }
    readEmployee() {
        this.apiService.getEmployees().subscribe((data) => {
            this.Employee = data;
        });
    }
    removeEmployee(employee, index) {
        if (window.confirm('Are you sure?')) {
            this.apiService.deleteEmployee(employee._id).subscribe((data) => {
                this.Employee.splice(index, 1);
            });
        }
    }
};
EmployeeListComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
EmployeeListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-list/employee-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./employee-list.component.css */ "./src/app/components/employee-list/employee-list.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], EmployeeListComponent);



/***/ }),

/***/ "./src/app/components/farm-details/farm-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/farm-details/farm-details.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    max-width: 500px;\r\n}\r\n\r\n\r\n\r\n.right {\r\n    text-align: right;\r\n    margin-right: 1em;\r\n}\r\n\r\n\r\n\r\n.circle {\r\n    margin: auto;\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 200px;\r\n    border-style: solid;\r\n    border-width: 4px;\r\n    border-color: #F6A030;\r\n    text-align: center;\r\n    line-height: 6;\r\n}\r\n\r\n\r\n\r\n.my-custom-class .tooltip-inner {\r\n    background-color: darkgreen;\r\n    font-size: 100%;\r\n  }\r\n\r\n\r\n\r\n.my-custom-class .arrow::before {\r\n    border-top-color: darkgreen;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXJtLWRldGFpbHMvZmFybS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7Ozs7QUFJQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7OztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7RUFDakI7Ozs7QUFDQTtJQUNFLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmFybS1kZXRhaWxzL2Zhcm0tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuXHJcblxyXG4ucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNGNkEwMzA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNjtcclxufVxyXG4ubXktY3VzdG9tLWNsYXNzIC50b29sdGlwLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICB9XHJcbiAgLm15LWN1c3RvbS1jbGFzcyAuYXJyb3c6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/farm-details/farm-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/farm-details/farm-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: FarmDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmDetailsComponent", function() { return FarmDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");




let FarmDetailsComponent = class FarmDetailsComponent {
    constructor(route, apiService) {
        this.route = route;
        this.apiService = apiService;
        this.displayedColumns = ['surface', 'culture', 'nbEmp', 'activite', 'ecoFarm', 'certif'];
        this.panelOpenState = false;
        this.route.params.subscribe((params) => this.myParam = params['id']);
    }
    ngOnInit() {
        this.apiService.getFarmDetails(this.myParam).subscribe((farm) => {
            this.farm = farm;
            this.scoreProgress = farm.score ? farm.score : 0;
            this.bufferProgress = 100 - this.scoreProgress;
        }, (error) => console.log("error occured when retreiving farm details ", error));
        this.apiService.getScoreDimensionByIdFarm(this.myParam).subscribe((scoreDimension) => {
            this.scoreDimension = scoreDimension;
        }, (error) => console.log("error occured when retreiving score dimension details ", error));
    }
    ngOnDestroy() {
        //throw new Error('Method not implemented.');
    }
};
FarmDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
FarmDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-farm-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./farm-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/farm-details/farm-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./farm-details.component.css */ "./src/app/components/farm-details/farm-details.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], FarmDetailsComponent);



/***/ }),

/***/ "./src/app/components/farm-list/farm-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/farm-list/farm-list.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-chip-list {\r\n  width: 100%;\r\n  justify-content: center;\r\n  padding: 1%;\r\n}\r\n\r\n.example-button-container>button {\r\n  margin: 0 12px;\r\n}\r\n\r\n:host /deep/ .mat-select-value-text {\r\n  color: green !important;\r\n}\r\n\r\n.not-empty-select {\r\n  background-color: wheat !important;\r\n  border-color: #F6A030 !important;\r\n}\r\n\r\n.not-empty-select.mat-option:hover {\r\n  background: wheat !important;\r\n  color: green !important;\r\n}\r\n\r\n/* Border */\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #F6A030;\r\n}\r\n\r\n::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\r\n  background-color: #F6A030 !important;\r\n}\r\n\r\n.flex-container-filter {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n}\r\n\r\n.flex-container-filter>div {\r\n  text-align: center;\r\n  margin: 5px;\r\n}\r\n\r\n.example-card {\r\n  max-width: 400px;\r\n  max-height: -webkit-min-content;\r\n  max-height: -moz-min-content;\r\n  max-height: min-content;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.column-label {\r\n  margin-right: 8px;\r\n  font-size: 1rem;\r\n}\r\n\r\nmat-card {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mr-10 {\r\n  margin-right: 10px;\r\n}\r\n\r\n.ml-10 {\r\n  margin-left: 10px;\r\n}\r\n\r\n.test-div {\r\n  margin-right: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.div-button-recherche{\r\n  margin-top: 8px;\r\n}\r\n\r\n.div-slide-toogle{\r\n  padding-left: 85%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXJtLWxpc3QvZmFybS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtBQUN6Qjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwrQkFBdUI7RUFBdkIsNEJBQXVCO0VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXJtLWxpc3QvZmFybS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tY29udGFpbmVyPmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcclxuICBjb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vdC1lbXB0eS1zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoZWF0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRjZBMDMwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub3QtZW1wdHktc2VsZWN0Lm1hdC1vcHRpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoZWF0ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEJvcmRlciAqL1xyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGNvbG9yOiAjRjZBMDMwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkEwMzAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyLWZpbHRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyLWZpbHRlcj5kaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXgtaGVpZ2h0OiBtaW4tY29udGVudDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY29sdW1uLWxhYmVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubXItMTAge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm1sLTEwIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnRlc3QtZGl2IHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmRpdi1idXR0b24tcmVjaGVyY2hle1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLmRpdi1zbGlkZS10b29nbGV7XHJcbiAgcGFkZGluZy1sZWZ0OiA4NSU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/farm-list/farm-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/farm-list/farm-list.component.ts ***!
  \*************************************************************/
/*! exports provided: FarmListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmListComponent", function() { return FarmListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_app_contants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.contants */ "./src/app/app.contants.ts");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var src_app_shared_components_score_dialog_score_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-components/score-dialog/score-dialog.component */ "./src/app/shared-components/score-dialog/score-dialog.component.ts");









let FarmListComponent = class FarmListComponent {
    constructor(formBuilder, apiService, sanitizer, router, dialog) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.dialog = dialog;
        this.sessionStorage = sessionStorage;
        //Rajout des chips dans un Set
        this.keywords = new Set();
        this.regionList = ['Auvergne-Rhône-Alpes',
            'Bourgogne-Franche-Comté',
            'Bretagne Centre-Val de Loire',
            'Corse',
            'Grand Est',
            'Hauts-de-France',
            'Ile-de-France',
            'Normandie',
            'Aquitaine',
            'Occitanie',
            'Pays de la Loire',
            'Provence-Alpes-Côte d’Azur',
            'Régions d’Outre-Mer'];
        this.productionList = ['Maraîchage',
            'Elevage',
            'Grandes cultures',
            'Arboriculture',
            'Viticulture',
            'Apiculture',
            'PPAM',
            'Autres'];
        this.activiteList = ['Transformation vin/huile d’olive',
            'Transformation fermière',
            'Vente circuit',
            'Travaux',
            'Pédagogie et formations',
            'Agrotourisme-loisirs',
            'Production d’énergie renouvelable',
            'Recherche',
            'Autres'];
        this.members = [
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
        ];
        this.reseauList = [''];
        this.vdList = [{ title: 'Vente Direct : Oui', value: "on" }, { title: 'Vente Direct : Non', value: "" }];
        this.selectedListProduc = [];
        this.selectedListRegion = [];
        this.selectedListAct = [];
        this.selectedListVd = [];
        this.selectedListReseau = [];
        this.isChecked = true;
        var curState = this.sessionStorage.getItem(src_app_app_contants__WEBPACK_IMPORTED_MODULE_6__["Globals"].SEARCH_FORM_STATE_KEY);
        this.filterForm = this.formBuilder.group({
            region: [''],
            activities: [''],
            productions: [''],
            reseaux: [''],
            ventesDirectes: [''],
            score: ['']
        });
        this.reseaux$ = this.apiService.loadReseaux();
    }
    ngOnInit() {
        if (this.sessionStorage.getItem(src_app_app_contants__WEBPACK_IMPORTED_MODULE_6__["Globals"].SEARCH_FORM_STATE_KEY)) {
            this.apiService.getFarmsByFilters(JSON.parse(this.sessionStorage.getItem(src_app_app_contants__WEBPACK_IMPORTED_MODULE_6__["Globals"].SEARCH_FORM_STATE_KEY))).subscribe(farms => {
                this.farms = farms;
            });
        }
        this.handleChipsOnInit();
    }
    handleChipsOnInit() {
        const sessionSearchKey = this.sessionStorage.getItem(src_app_app_contants__WEBPACK_IMPORTED_MODULE_6__["Globals"].SEARCH_FORM_STATE_KEY);
        if (sessionSearchKey && Array.isArray(Object.entries(JSON.parse(sessionSearchKey)))) {
            Object.entries(JSON.parse(sessionSearchKey)).forEach(val => {
                if (Array.isArray(val[1])) {
                    val[1].forEach(v => {
                        this.keywords.add(v);
                    });
                }
                else
                    this.keywords.add(val[1]);
            });
        }
    }
    onToogleMap() {
        if (this.isChecked) {
            this.isChecked = false;
        }
        else
            this.isChecked = true;
    }
    onFormSubmit() {
        let key;
        let toSend = this.filterForm.value;
        for (let key in toSend) {
            if (!`${toSend[key]}`)
                delete toSend[key];
        }
        this.sessionStorage.setItem(src_app_app_contants__WEBPACK_IMPORTED_MODULE_6__["Globals"].SEARCH_FORM_STATE_KEY, JSON.stringify(this.filterForm.value));
        this.apiService.getFarmsByFilters(toSend).subscribe(farms => {
            console.log("farms ", farms);
            this.farms = farms;
        });
    }
    manageChips(event, origine) {
        this.uncheckedFilterValues(origine, event);
        if (event) {
            let chipArray = event;
            chipArray.forEach(chip => {
                this.keywords.add(chip);
            });
        }
    }
    uncheckedFilterValues(origine, event) {
        if (origine == 'production') {
            let missing = null;
            for (let i = 0; i < this.selectedListProduc.length; i++) {
                if (event.indexOf(this.selectedListProduc[i]) == -1)
                    missing = this.selectedListProduc[i];
            }
            if (missing) {
                this.removeKeyword(missing);
            }
            this.selectedListProduc = event;
        }
        else if (origine == 'region') {
            let missing = null;
            for (let i = 0; i < this.selectedListRegion.length; i++) {
                if (event.indexOf(this.selectedListRegion[i]) == -1)
                    missing = this.selectedListRegion[i];
            }
            if (missing) {
                this.removeKeyword(missing);
            }
            this.selectedListRegion = event;
        }
        else if (origine == 'activite') {
            let missing = null;
            for (let i = 0; i < this.selectedListAct.length; i++) {
                if (event.indexOf(this.selectedListAct[i]) == -1)
                    missing = this.selectedListAct[i];
            }
            if (missing) {
                this.removeKeyword(missing);
            }
            this.selectedListAct = event;
        }
        else if (origine == 'vente') {
            let missing = null;
            for (let i = 0; i < this.selectedListVd.length; i++) {
                if (event.indexOf(this.selectedListVd[i]) == -1)
                    missing = this.selectedListVd[i];
            }
            if (missing) {
                this.removeKeyword(missing);
            }
            this.selectedListVd = event;
        }
        else if (origine == 'vente') {
            let missing = null;
            for (let i = 0; i < this.selectedListReseau.length; i++) {
                if (event.indexOf(this.selectedListReseau[i]) == -1)
                    missing = this.selectedListReseau[i];
            }
            if (missing) {
                this.removeKeyword(missing);
            }
            this.selectedListReseau = event;
        }
    }
    removeKeyword(keyword) {
        this.keywords.delete(keyword);
    }
    goToFarmDetails(id) {
        console.log("value on click ", id);
        // this.router.navigate(["/ferme"]);
        var myurl = `/fermes/${id}`;
        this.router.navigateByUrl(myurl).then(e => {
            if (e) {
                console.log("Navigation is successful!");
            }
            else {
                console.log("Navigation has failed!");
            }
        });
    }
    openScoreDialog() {
        const dialogRef = this.dialog.open(src_app_shared_components_score_dialog_score_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ScoreDialogComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (this.oldScore) {
                    this.keywords.delete(this.oldScore);
                    this.filterForm.get('score').setValue("");
                }
                this.keywords.add(`Score: ${result}`);
                this.oldScore = `Score: ${result}`;
                let numResult = result;
                this.filterForm.get('score').setValue(numResult);
            }
        });
    }
};
FarmListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
FarmListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-farm-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./farm-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/farm-list/farm-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./farm-list.component.css */ "./src/app/components/farm-list/farm-list.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_service_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], FarmListComponent);



/***/ }),

/***/ "./src/app/components/first-page/first-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/first-page/first-page.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maXJzdC1wYWdlL2ZpcnN0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9maXJzdC1wYWdlL2ZpcnN0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/first-page/first-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/first-page/first-page.component.ts ***!
  \***************************************************************/
/*! exports provided: FirstPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function() { return FirstPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_app_contants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.contants */ "./src/app/app.contants.ts");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");







let FirstPageComponent = class FirstPageComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.sessionStorage = sessionStorage;
        this.region = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.regionList = ['Auvergne-Rhône-Alpes',
            'Bourgogne-Franche-Comté',
            'Bretagne Centre-Val de Loire',
            'Corse',
            'Grand Est',
            'Hauts-de-France',
            'Ile-de-France',
            'Normandie',
            'Aquitaine',
            'Occitanie',
            'Pays de la Loire',
            'Provence-Alpes-Côte d’Azur',
            'Régions d’Outre-Mer'];
    }
    ngOnInit() {
        this.filteredRegions = this.region.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.regionList.filter(option => option.toLowerCase().includes(filterValue));
    }
    onFormSubmit() {
        // var currentFilterVal: any = JSON.parse(this.sessionStorage.getItem(Globals.SEARCH_FORM_STATE_KEY));
        let regionToSend = { region: this.region.value };
        this.sessionStorage.setItem(src_app_app_contants__WEBPACK_IMPORTED_MODULE_5__["Globals"].SEARCH_FORM_STATE_KEY, JSON.stringify(regionToSend));
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['fermes']);
        });
    }
};
FirstPageComponent.ctorParameters = () => [
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FirstPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-first-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./first-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/first-page/first-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./first-page.component.css */ "./src/app/components/first-page/first-page.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], FirstPageComponent);



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.baseUri = 'http://localhost:3000/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create
    createEmployee(data) {
        let url = `${this.baseUri}/create`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get all employees
    getEmployees() {
        return this.http.get(`${this.baseUri}`);
    }
    // Get employee
    getEmployee(id) {
        let url = `${this.baseUri}/read/${id}`;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Update employee
    updateEmployee(id, data) {
        let url = `${this.baseUri}/update/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Delete employee
    deleteEmployee(id) {
        let url = `${this.baseUri}/delete/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Error handling 
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    getFarmsByRegion(region) {
        let url = `${this.baseUri}/recherche/regions/${region}`;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    getFarmsByFilters(filterValues) {
        // params = params.append('filterValues', filterValues);
        // params = params.append('_limit', 10);
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('queryStr', filterValues);
        let url = `${this.baseUri}/recherche`;
        console.log('filterValues ', filterValues);
        return this.http.get(url, { params: filterValues }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    getFarmDetails(farmId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('id', farmId);
        let url = `${this.baseUri}/farms/${farmId}`;
        console.log('farmId sent to the back ', farmId);
        return this.http.get(url, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    getScoreDimensionByIdFarm(farmId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('id', farmId);
        let url = `${this.baseUri}/farm/${farmId}/score-dimensions`;
        console.log('farmId sent to the back to retreive score dimension ', farmId);
        return this.http.get(url, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    loadReseaux() {
        return this.http.get(`${this.baseUri}/reseaux`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], ApiService);



/***/ }),

/***/ "./src/app/shared-components/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared-components/footer/footer.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-footer {\r\n    padding-top: 20px;\r\n    color: #fff;\r\n    background-color: #ee6e73;\r\n  }\r\n  \r\n  .page-footer .footer-copyright {\r\n    overflow: hidden;\r\n    min-height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 10px 0px;\r\n    color: black;\r\n    background-color: white;\r\n    border-style: solid;\r\n    border-color: #000;\r\n    border-width: 1px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBSWhCLGFBQWE7SUFJTCxtQkFBbUI7SUFJbkIsOEJBQThCO0lBQ3RDLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtZm9vdGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU2ZTczO1xyXG4gIH1cclxuICBcclxuICAucGFnZS1mb290ZXIgLmZvb3Rlci1jb3B5cmlnaHQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/shared-components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared-components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/footer/footer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.css */ "./src/app/shared-components/footer/footer.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/shared-components/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared-components/header/header.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shared-components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared-components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.css */ "./src/app/shared-components/header/header.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared-components/score-dialog/score-dialog.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared-components/score-dialog/score-dialog.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-slider {\n  width: 300px;\n}\n\n.mat-dialog-content {\n  max-height: 100vh;\n}\n\n::ng-deep .mat-slider-wrapper .mat-slider-thumb-container .mat-slider-thumb-label {\n  width: 50px;\n  height: 50px;\n  top: -62px;\n  right: -25px;\n}\n\n.cn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mat-dialog-actions {\n  padding: 8px 0;\n  display: flex;\n  flex-wrap: wrap;\n  min-height: 52px;\n  align-items: center;\n  box-sizing: content-box;\n  margin-bottom: -24px;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2NvcmUtZGlhbG9nL0Q6XFxUcmF2YWlsXFxNZWNlbmF0X0Vjb0Zhcm1zXFxOZXdFY29GYXJtc0FuZ3VsYXJcXGVjb2Zhcm1zL3NyY1xcYXBwXFxzaGFyZWQtY29tcG9uZW50c1xcc2NvcmUtZGlhbG9nXFxzY29yZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3Njb3JlLWRpYWxvZy9zY29yZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxpQkFBQTtBQ0VKOztBREVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NSOztBRElFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3Njb3JlLWRpYWxvZy9zY29yZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2xpZGVyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXdyYXBwZXIge1xyXG4gICAgLm1hdC1zbGlkZXItdGh1bWItY29udGFpbmVyIHtcclxuICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB0b3A6IC02MnB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gIH1cclxuXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiA1MnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTI0cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufSIsIm1hdC1zbGlkZXIge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXdyYXBwZXIgLm1hdC1zbGlkZXItdGh1bWItY29udGFpbmVyIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdG9wOiAtNjJweDtcbiAgcmlnaHQ6IC0yNXB4O1xufVxuXG4uY24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1pbi1oZWlnaHQ6IDUycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBtYXJnaW4tYm90dG9tOiAtMjRweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared-components/score-dialog/score-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared-components/score-dialog/score-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScoreDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreDialogComponent", function() { return ScoreDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");



let ScoreDialogComponent = class ScoreDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.score = 0;
    }
    ngOnInit() {
    }
    formatLabel(value) {
        if (value <= 19)
            return 'Faible';
        else if (value >= 20 && value <= 39)
            return 'Modéré';
        else if (value >= 40 && value <= 59)
            return 'Bon';
        else if (value >= 60 && value <= 79)
            return 'Trés Bon';
        else if (value >= 80 && value <= 100)
            return 'Excellent';
        console.log("this.score ", this.score);
        return value;
    }
    updateSetting(event) {
        this.score = event.value;
    }
    onNoClick(confClick) {
        if (confClick) {
            this.dialogRef.close(this.score);
        }
        else {
            this.dialogRef.close(confClick);
        }
    }
};
ScoreDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
ScoreDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-score-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./score-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/score-dialog/score-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./score-dialog.component.scss */ "./src/app/shared-components/score-dialog/score-dialog.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], ScoreDialogComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Travail\Mecenat_EcoFarms\NewEcoFarmsAngular\ecofarms\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map