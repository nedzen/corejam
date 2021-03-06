import { userRegisterMutationGQL } from "@corejam/plugin-auth/shared/graphql/Mutations";
import { Component, h, Host, Listen } from "@stencil/core";
import { coreState } from "@corejam/core-components";
import { runState } from "@corejam/run";
import { authStore } from "@corejam/plugin-auth";
import gql from "graphql-tag";

@Component({
  tag: "dershop-form-register",
})
export class AuthRegister {
  private formId = "register";

  @Listen("sendForm", { target: "window" })
  async formEventHandler({ detail }) {
    if (detail.formId != this.formId) return;

    const request = await coreState.client.mutate({
      mutation: gql(userRegisterMutationGQL),
      variables: {
        data: {
          firstName: detail.firstName.value,
          lastName: detail.lastName.value,
          email: detail.email.value,
          password: detail.password.value,
          passwordConfirm: detail.passwordConfirm.value,
        },
      },
    });

    if (request.data.userRegister) {
      runState.router.push("/login");
    }
  }

  componentWillLoad() {
    if (authStore.identity) runState.router.push("/");
  }

  render() {
    return (
      <Host>
        <corejam-box
          p={8}
          rounded="md"
          bStyle="solid"
          bWidth={1}
          bColor="gray-200"
          max="md"
          mx="auto"
          px={4}
          px-lg="0"
          flex
          justify="between"
          mb={24}
        >
          <corejam-box w={5} mx="auto">
            <corejam-box pb={4} mb={8} bWidthBottom={1} bColor="gray-400">
              <corejam-type as="h2" size="xl">
                Register
              </corejam-type>
            </corejam-box>
            <corejam-form-container name={this.formId}>
              <corejam-box>
                <corejam-box>
                  <corejam-form-input name="firstName" type="text" formId={this.formId} label="Name" />
                </corejam-box>
                <corejam-box>
                  <corejam-form-input name="lastName" type="text" formId={this.formId} label="Surname" />
                </corejam-box>
                <corejam-form-input required={true} name="email" type="email" formId={this.formId} label="Email" />
                <corejam-box>
                  <corejam-form-input name="password" type="password" formId={this.formId} label="Password" />
                </corejam-box>
                <corejam-box>
                  <corejam-form-input
                    name="passwordConfirm"
                    type="password"
                    formId={this.formId}
                    label="Confirm Password"
                  />
                </corejam-box>
                <corejam-box>
                  <corejam-form-input type="checkbox" formId={this.formId} label="I agree to the terms & conditions" />
                </corejam-box>
                <corejam-box>
                  <corejam-form-submit formId={this.formId}>
                    <button type="submit">Register</button>
                  </corejam-form-submit>
                </corejam-box>
              </corejam-box>
            </corejam-form-container>
          </corejam-box>
        </corejam-box>
      </Host>
    );
  }
}
