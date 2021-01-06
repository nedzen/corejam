import { Component, Host, h, Prop, State, Event } from "@stencil/core";
import { href } from "stencil-router-v2";
import { state as routerState } from "@corejam/router";
import { Link } from "./Link.types";
import { EventEmitter } from "@corejam/run/dist/types/stencil-public-runtime";

@Component({
  tag: "corejam-base-link",
})
export class BaseLink {
  @State() style: any[] = [];
  @State() computedStyle: string;
  @State() hash: string;

  @Prop() href: Link.Href;
  @Prop() color: Link.Color | "--cj-color-primary" = "--cj-color-primary";
  @Prop() hoverColor: Link.Color | "--cj-color-secondary" = "--cj-color-secondary";
  @Prop() decoration: Link.Decoration | "--cj-link-decoration" = "--cj-link-decoration";
  @Prop() hoverDecoration: Link.Decoration | "--cj-link-hover-decoration" = "--cj-link-hover-decoration";

  @Event() routeChange: EventEmitter;

  async componentWillLoad() {
    await this.computeStyles();
  }

  async computeStyles() {
    const hash = await (await import("../../utils/style")).calculateStyles(this);
    this.hash = hash;
  }

  renderLink() {
    if (routerState.router) {
      const defaultProps = href(this.href, routerState.router);

      const overwrittenProps = {
        ...defaultProps,
        onClick: (ev: MouseEvent) => {
          this.routeChange.emit({ type: "routechange", newUrl: this.href });
          defaultProps.onClick(ev);
          window.scrollTo({ top: 0 })
        },
      };

      return (
        <a {...overwrittenProps} class={this.hash}>
          <slot></slot>
        </a>
      );
    }
    return (
      <a href={this.href} class={this.hash}>
        <slot></slot>
      </a>
    );
  }

  render() {
    return <Host class={this.hash}>{this.renderLink()}</Host>;
  }
}
