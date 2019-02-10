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
class Employee {
    id: string;
    name: string;
}

class EmployeViewModel {
    employee: Employee = new Employee();
    left: number = 0;
    top: number = 0;
    originalLeft: number;
    originalTop: number;
    isMouseDown: boolean = false;
    isMouseMove: boolean = false;
    mouseDownX: number;
    mouseDownY: number;

}

// ======================== View =====================================
interface IView {
    build();
}

class EmployeeView implements IView {
    box: JQuery;
    idTextBox: JQuery;
    nameTextBox: JQuery;
    saveButton: JQuery;

    build() {
        this.box = $('<div/>').appendTo($('#main-layout')).addClass('employee');
        this.idTextBox = $("<input type='text'>").appendTo(this.box).addClass('employee-id');
        this.nameTextBox = $("<input type='text'>").appendTo(this.box).addClass('employee-name');
        this.saveButton = $("<input type='button'>").attr('value', 'Save').appendTo(this.box).addClass('save-button');
    }


}

// ========================= Presenter ============================================
interface IPresenter {
    updateView();
}

class EmployeePresenter implements IPresenter {
    model: EmployeViewModel;
    view: EmployeeView;

    constructor(m: EmployeViewModel, v: EmployeeView) {
        this.model = m;
        this.view = v;

        this.view.saveButton.click((e) => { this.saveEmployee(e) });
        this.view.box.mousedown((e) => { this.mouseDown(e) });
        this.view.box.mouseup((e) => { this.mouseUp(e) });
        this.view.box.mousemove((e) => { this.mouseMove(e) });

    }

    mouseDown(e) {
        this.model.isMouseDown = true;
        this.model.originalLeft = this.model.left;
        this.model.originalTop = this.model.top;
        this.model.mouseDownX = e.clientX;
        this.model.mouseDownY = e.clientY;

        this.updateView();
    }

    mouseUp(e) {
        this.model.isMouseDown = false;
        this.model.isMouseMove = false;
        this.updateView();

    }

    mouseMove(e) {
        if (this.model.isMouseDown === false) return;
        this.model.isMouseMove = true;

        this.model.left = this.model.originalLeft + e.clientX - this.model.mouseDownX;
        this.model.top = this.model.originalTop + e.clientY - this.model.mouseDownY;

        this.updateView();
    }

    saveEmployee(e) {
        this.model.employee.id = String(this.view.idTextBox.val());
        this.model.employee.name = String(this.view.nameTextBox.val());
        alert("ID: " + this.model.employee.id + "; Name: " + this.model.employee.name);
    }

    updateView() {
        this.view.box.offset({ top: this.model.top, left: this.model.left });

        
        if(this.model.isMouseDown && this.model.isMouseMove ){
            this.view.box.addClass('box-shadow');
        } else {
            this.view.box.removeClass('box-shadow');
        }
    }
}