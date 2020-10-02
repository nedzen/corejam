import { Component, h } from "@stencil/core";

@Component({
  tag: "dershop-footer",
  styleUrl: "footer.css",
  shadow: true,
})
export class Footer {
  render() {
    return (
      <footer>
        <corejam-box max="xl" mx="auto" px={4} xlPx={0} flex justify="between" mt={8} pb={6}>
          <corejam-box flex items="baseline">
            <dershop-logo></dershop-logo>
          </corejam-box>
          <corejam-box flex direction="col" justify="center">
            <dershop-ui-type size="xs" color="gray-600">
              Early Preview
            </dershop-ui-type>
          </corejam-box>
        </corejam-box>
      </footer>
    );
  }
}