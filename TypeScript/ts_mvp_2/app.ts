/// <reference path="./JQuery.d.ts" />

$(document).ready(initialize);

function initialize() {
    // alert("hello, typescript.");
    var v = new EmployeeView();
    v.build();

    var vm = new EmployeeViewModel();
    var p = new EmployeePresenter(vm, v);



}

// =============== domain model, view model =============
// Model stores data.
class Employee {
    id: string;
    name: string;
}

class EmployeeViewModel {
    employee: Employee = new Employee();
    left: number = 0;
    top: number = 0;
    isMouseDown: boolean = false;
    mouseDownX: number;
    mouseDownY: number;
    originalLeft: number;
    originalTop: number;
}

// ============== view ===================================
interface IView {
    box: JQuery; // box is the container
    build(); // in order to build view
}

// ===============presenter================================
// logic in Presenter. Model and View are connected by Presenter.
// View would be refreshed by Presenter.

interface IPresenter {
    updateView();
}


// ===========================================================
class EmployeeView implements IView {
    box: JQuery;
    idTextBox: JQuery;
    nameTextBox: JQuery;
    saveButton: JQuery;

    build() {
        this.box = $("<div/>").appendTo($("#main-layout")).addClass("employee-view");
        this.idTextBox = $("<input type='text'/>").appendTo(this.box).addClass("employee-id-textbox");
        this.nameTextBox = $("<input type='text'/>").appendTo(this.box).addClass("employee-name-textbox");
        this.saveButton = $("<input type='button'/>").attr("value", "Save").appendTo(this.box).addClass("save-button");

    }
}

class EmployeePresenter implements IPresenter {
    model: EmployeeViewModel;
    view: EmployeeView;
    constructor(m: EmployeeViewModel, v: EmployeeView) {
        this.model = m;
        this.view = v;
        this.view.saveButton.click((e) => {
            this.saveEmployee(e);
        });

        this.view.box.mousedown((e) => { this.mouseDown(e); });
        this.view.box.mouseup((e) => { this.mouseUp(e); });
        this.view.box.mousemove((e) => { this.mouseMove(e); });
    }

    mouseDown(e: JQueryMouseEventObject) {
        this.model.isMouseDown = true;
        this.model.mouseDownX = e.clientX;
        this.model.mouseDownY = e.clientY;
        this.model.originalLeft = this.model.left;
        this.model.originalTop = this.model.top;
        this.updateView();
    }

    mouseMove(e: JQueryMouseEventObject) {
        if (this.model.isMouseDown === false) { return; }

        this.model.left = this.model.originalLeft + (e.clientX - this.model.mouseDownX);
        this.model.top = this.model.originalTop + (e.clientY - this.model.mouseDownY);
        this.updateView();
    }

    mouseUp(e: JQueryMouseEventObject) {
        this.model.isMouseDown = false;
        this.updateView();
    }

    saveEmployee(e: JQueryEventObject) {
        this.model.employee.id = String(this.view.idTextBox.val());
        this.model.employee.name = String(this.view.nameTextBox.val());
        alert("ID: " + this.model.employee.id + "; Name: " + this.model.employee.name);
    }

    // saveEmployee() {
    //     this.model.id = String( this.view.idTextBox.val());
    //     this.model.name = String(this.view.nameTextBox.val());
    //     alert("ID: " + this.model.id + "; Name: " + this.model.name);
    // }

    updateView() {
        this.view.box.offset({ top: this.model.top, left: this.model.left });
        if (this.model.isMouseDown) {
            this.view.box.addClass('employee-view-dragging ');
        } else {
            this.view.box.removeClass('employee-view-dragging ');
        }
    }
}

