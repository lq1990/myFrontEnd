/// <reference path="./node_modules/@types/jquery/JQuery.d.ts" />
$(document).ready(init);
function init() {
    // alert('hello, ts.');
    var v = new EmployeeView();
    v.build();
    var vm = new EmployeeViewModel();
    var p = new EmployeePresenter(vm, v);
}
// ================== Model: domain model, view model ==========================
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var EmployeeViewModel = /** @class */ (function () {
    function EmployeeViewModel() {
        this.employee = new Employee();
        this.left = 0;
        this.top = 0;
        this.isMouseDown = false;
        this.isMouseMove = false;
    }
    return EmployeeViewModel;
}());
var EmployeeView = /** @class */ (function () {
    function EmployeeView() {
    }
    EmployeeView.prototype.build = function () {
        this.box = $("<div/>").appendTo($("#main-layout")).addClass('employee-view');
        this.idTextBox = $("<input type='text'>").appendTo(this.box).addClass('employee-id-textbox');
        this.nameTextBox = $("<input type='text'>").appendTo(this.box).addClass('employee-name-textbox');
        this.saveButton = $("<input type='button'>").attr('value', 'Save').appendTo(this.box).addClass('save-button');
    };
    return EmployeeView;
}());
var EmployeePresenter = /** @class */ (function () {
    function EmployeePresenter(m, v) {
        var _this = this;
        this.model = m;
        this.view = v;
        this.view.saveButton.click(function (e) { _this.saveEmployee(); });
        this.view.box.mousedown(function (e) { _this.mouseDown(e); });
        this.view.box.mouseup(function (e) { _this.mouseUp(e); });
        this.view.box.mousemove(function (e) { _this.mouseMove(e); });
        // we can only click the field of ViewBox.
    }
    EmployeePresenter.prototype.mouseDown = function (e) {
        this.model.isMouseDown = true;
        this.model.mouseDownX = e.clientX;
        this.model.mouseDownY = e.clientY;
        this.model.originalLeft = this.model.left;
        this.model.originalTop = this.model.top;
        // because we can click the whole field of box, 
        // we need originalLeft and originalTop to memorize the point where we clicked.
        this.updateView();
    };
    EmployeePresenter.prototype.mouseUp = function (e) {
        this.model.isMouseDown = false;
        this.model.isMouseMove = false;
        this.updateView();
    };
    EmployeePresenter.prototype.mouseMove = function (e) {
        if (this.model.isMouseDown === false) {
            return;
        }
        this.model.isMouseMove = true;
        this.model.top = e.clientY - this.model.mouseDownY + this.model.originalTop;
        this.model.left = e.clientX - this.model.mouseDownX + this.model.originalLeft;
        this.updateView();
    };
    EmployeePresenter.prototype.saveEmployee = function () {
        this.model.employee.id = String(this.view.idTextBox.val());
        this.model.employee.name = String(this.view.nameTextBox.val());
        alert('ID: ' + this.model.employee.id + '; Name: ' + this.model.employee.name);
    };
    EmployeePresenter.prototype.updateView = function () {
        this.view.box.offset({ top: this.model.top, left: this.model.left });
        // use data in Model to update View.
        if (this.model.isMouseDown && this.model.isMouseMove) {
            this.view.box.addClass('box-shadow');
        }
        else {
            this.view.box.removeClass('box-shadow');
        }
    };
    return EmployeePresenter;
}());
