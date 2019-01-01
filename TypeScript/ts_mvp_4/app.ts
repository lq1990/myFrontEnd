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
class Employee {
    id: string;
    name: string;
}

class EmployeeViewModel {
    employee: Employee = new Employee();
    left: number = 0;
    top: number = 0;
    isMouseDown: boolean = false;
    isMouseMove: boolean = false;
    mouseDownX: number;
    mouseDownY: number;
    originalLeft: number;
    originalTop: number;
}

// ================================ View ======================================
interface IView { // use interface to restrict realization of View.
    box: JQuery;
    build();
}

// =============================== Presenter ===========================
// in Presenter, View will be updated.
interface IPresenter {
    updateView();
}




class EmployeeView implements IView {
    box: JQuery;
    idTextBox: JQuery;
    nameTextBox: JQuery;
    saveButton: JQuery;

    build() {
        this.box = $("<div/>").appendTo($("#main-layout")).addClass('employee-view');
        this.idTextBox = $("<input type='text'>").appendTo(this.box).addClass('employee-id-textbox');
        this.nameTextBox = $("<input type='text'>").appendTo(this.box).addClass('employee-name-textbox');
        this.saveButton = $("<input type='button'>").attr('value', 'Save').appendTo(this.box).addClass('save-button');
    }
}

class EmployeePresenter implements IPresenter {
    model: EmployeeViewModel;
    view: EmployeeView;

    constructor(m: EmployeeViewModel, v: EmployeeView) {
        this.model = m;
        this.view = v;

        this.view.saveButton.click((e) => { this.saveEmployee() });
        this.view.box.mousedown((e) => { this.mouseDown(e); });
        this.view.box.mouseup((e) => { this.mouseUp(e); });
        this.view.box.mousemove((e) => { this.mouseMove(e); });
        // we can only click the field of ViewBox.

    }

    mouseDown(e) {
        this.model.isMouseDown = true;

        this.model.mouseDownX = e.clientX;
        this.model.mouseDownY = e.clientY;
        this.model.originalLeft = this.model.left;
        this.model.originalTop = this.model.top;
        // because we can click the whole field of box, 
        // we need originalLeft and originalTop to memorize the point where we clicked.

        this.updateView();
    }
    mouseUp(e) {
        this.model.isMouseDown = false;
        this.model.isMouseMove = false;
        this.updateView();
    }
    mouseMove(e) {
        if (this.model.isMouseDown === false) { return; }
        this.model.isMouseMove = true;

        this.model.top = e.clientY - this.model.mouseDownY + this.model.originalTop;
        this.model.left = e.clientX - this.model.mouseDownX + this.model.originalLeft;

        this.updateView();
    }

    saveEmployee() {
        this.model.employee.id = String(this.view.idTextBox.val());
        this.model.employee.name = String(this.view.nameTextBox.val());
        alert('ID: ' + this.model.employee.id + '; Name: ' + this.model.employee.name);
    }

    updateView() {
        this.view.box.offset({ top: this.model.top, left: this.model.left })
        // use data in Model to update View.

        if (this.model.isMouseDown && this.model.isMouseMove) {
            this.view.box.addClass('box-shadow');
        } else {
            this.view.box.removeClass('box-shadow');
        }
    }
}