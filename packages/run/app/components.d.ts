/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CorejamRunApp {
    }
    interface CorejamRunRouter {
    }
}
declare global {
    interface HTMLCorejamRunAppElement extends Components.CorejamRunApp, HTMLStencilElement {
    }
    var HTMLCorejamRunAppElement: {
        prototype: HTMLCorejamRunAppElement;
        new (): HTMLCorejamRunAppElement;
    };
    interface HTMLCorejamRunRouterElement extends Components.CorejamRunRouter, HTMLStencilElement {
    }
    var HTMLCorejamRunRouterElement: {
        prototype: HTMLCorejamRunRouterElement;
        new (): HTMLCorejamRunRouterElement;
    };
    interface HTMLElementTagNameMap {
        "corejam-run-app": HTMLCorejamRunAppElement;
        "corejam-run-router": HTMLCorejamRunRouterElement;
    }
}
declare namespace LocalJSX {
    interface CorejamRunApp {
    }
    interface CorejamRunRouter {
    }
    interface IntrinsicElements {
        "corejam-run-app": CorejamRunApp;
        "corejam-run-router": CorejamRunRouter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "corejam-run-app": LocalJSX.CorejamRunApp & JSXBase.HTMLAttributes<HTMLCorejamRunAppElement>;
            "corejam-run-router": LocalJSX.CorejamRunRouter & JSXBase.HTMLAttributes<HTMLCorejamRunRouterElement>;
        }
    }
}
