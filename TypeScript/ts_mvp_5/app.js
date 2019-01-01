/// <reference path="./node_modules/@types/jquery/JQuery.d.ts" />
$(document).ready(init);
function init() {
    // alert('hello, ts.');
    var vm = new EmployeViewModel();
    var v = new EmployeeView();
    v.build();
    var p = new EmployeePresenter(vm, v);
}
// ======================= Model ====================================
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var EmployeViewModel = /** @class */ (function () {
    function EmployeViewModel() {
        this.employee = new Employee();
        this.left = 0;
        this.top = 0;
        this.isMouseDown = false;
        this.isMouseMove = false;
    }
    return EmployeViewModel;
}());
var EmployeeView = /** @class */ (function () {
    function EmployeeView() {
    }
    EmployeeView.prototype.build = function () {
        this.box = $('<div/>').appendTo($('#main-layout')).addClass('employee');
        this.idTextBox = $("<input type='text'>").appendTo(this.box).addClass('employee-id');
        this.nameTextBox = $("<input type='text'>").appendTo(this.box).addClass('employee-name');
        this.saveButton = $("<input type='button'>").attr('value', 'Save').appendTo(this.box).addClass('save-button');
    };
    return EmployeeView;
}());
var EmployeePresenter = /** @class */ (function () {
    function EmployeePresenter(m, v) {
        var _this = this;
        this.model = m;
        this.view = v;
        this.view.saveButton.click(function (e) { _this.saveEmployee(e); });
        this.view.box.mousedown(function (e) { _this.mouseDown(e); });
        this.view.box.mouseup(function (e) { _this.mouseUp(e); });
        this.view.box.mousemove(function (e) { _this.mouseMove(e); });
    }
    EmployeePresenter.prototype.mouseDown = function (e) {
        this.model.isMouseDown = true;
        this.model.originalLeft = this.model.left;
        this.model.originalTop = this.model.top;
        this.model.mouseDownX = e.clientX;
        this.model.mouseDownY = e.clientY;
        this.updateView();
    };
    EmployeePresenter.prototype.mouseUp = function (e) {
        this.model.isMouseDown = false;
        this.model.isMouseMove = false;
        this.updateView();
    };
    EmployeePresenter.prototype.mouseMove = function (e) {
        if (this.model.isMouseDown === false)
            return;
        this.model.isMouseMove = true;
        this.model.left = this.model.originalLeft + e.clientX - this.model.mouseDownX;
        this.model.top = this.model.originalTop + e.clientY - this.model.mouseDownY;
        this.updateView();
    };
    EmployeePresenter.prototype.saveEmployee = function (e) {
        this.model.employee.id = String(this.view.idTextBox.val());
        this.model.employee.name = String(this.view.nameTextBox.val());
        alert("ID: " + this.model.employee.id + "; Name: " + this.model.employee.name);
    };
    EmployeePresenter.prototype.updateView = function () {
        this.view.box.offset({ top: this.model.top, left: this.model.left });
        if (this.model.isMouseDown && this.model.isMouseMove) {
            this.view.box.addClass('box-shadow');
        }
        else {
            this.view.box.removeClass('box-shadow');
        }
    };
    return EmployeePresenter;
}());
