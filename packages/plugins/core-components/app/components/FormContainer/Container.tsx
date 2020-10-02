import { Component, ComponentInterface, h, Host, Listen, State, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "corejam-form-container",
  shadow: true,
})
export class CorejamFormContainer implements ComponentInterface {
  @Prop() name: string;
  @State() formData: any = {};
  @Event() formEvent: EventEmitter;
  @Event() formSubmit: EventEmitter;
  @Event() sendForm: EventEmitter;

  @Listen("formSubmit")
  handleSubmit(e) {
    if (e.detail.name == this.name) {
      console.info("form submit");
      const data = {
        ...this.formData,
      };
      this.sendForm.emit(data);
    }
  }

  @Listen("formEvent")
  receivedFormEvent(event) {
    if (event.detail.name == this.name) {
      const formData = {
        ...this.formData,
        formId: this.name,
      };
      console.log(formData);
      formData[event.detail.key] = event.detail;
      this.formData = formData;
    }
  }

  render() {
    return (
      <Host as="form">
        <slot></slot>
      </Host>
    );
  }
}