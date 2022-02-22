import { createPathComponent, updateCircle } from "@react-leaflet/core";
import type { CircleMarkerProps } from "@react-leaflet/core";
import {
  CircleMarker as LeafletCircleMarker,
  Canvas as LeafletCanvas,
  CircleMarkerOptions,
  LatLngExpression,
} from "leaflet";

export type { CircleMarkerProps } from "@react-leaflet/core";

type LeafletCanvasMarkerOptions = {
  src: string;
  showBackground?: boolean;
  borderColor?: string;
  radius: number;
  padding?: number;
  onClick?: () => void;
};

type CanvasMarkerProps = LeafletCanvasMarkerOptions & CircleMarkerProps;

const CanvasMarker = createPathComponent<LeafletNodeMarker, CanvasMarkerProps>(
  function createCircleMarker({ center, children: _c, ...options }, ctx) {
    const instance = new LeafletNodeMarker(center, options);
    return { instance, context: { ...ctx, overlayContainer: instance } };
  },
  updateCircle
);

export default CanvasMarker;

const imageElements: {
  [src: string]: HTMLImageElement;
} = {};

class LeafletNodeMarker extends LeafletCircleMarker {
  declare options: LeafletCanvasMarkerOptions & CircleMarkerOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _renderer: any;
  declare imageElement: HTMLImageElement;
  private _onImageLoad: (() => void) | undefined = undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  declare _point: any;
  public actionHandle?: NodeJS.Timeout;

  constructor(
    latLng: LatLngExpression,
    options: LeafletCanvasMarkerOptions & CircleMarkerOptions
  ) {
    super(latLng, options);
    if (!imageElements[options.src]) {
      imageElements[options.src] = document.createElement("img");
      imageElements[options.src].src = options.src;
    }
    this.imageElement = imageElements[options.src];
    if (this.options.onClick) {
      this.on("click", this.options.onClick);
    }
  }

  _redraw(): void {
    return;
  }

  _update(): void {
    return;
  }

  _updatePath(): void {
    if (this.imageElement.complete) {
      this._renderer!._updateCanvasImg(this);
    } else if (!this._onImageLoad) {
      this._onImageLoad = () => {
        this.imageElement.removeEventListener("load", this._onImageLoad!);
        this._renderer!._updateCanvasImg(this);
      };
      this.imageElement.addEventListener("load", this._onImageLoad);
    }
  }
}

LeafletCanvas.include({
  _updateCanvasImg(layer: LeafletNodeMarker) {
    if (!layer.imageElement.complete) {
      return;
    }
    const ctx: CanvasRenderingContext2D = this._ctx;
    if (!ctx) {
      return;
    }
    const { radius, showBackground, borderColor, padding = 0 } = layer.options;
    const p = layer._point.round();
    const size = radius * 2;
    const halfWidth = size / 2;
    const halfHeight = halfWidth;
    const dx = p.x - halfWidth;
    const dy = p.y - halfHeight;
    if (showBackground) {
      ctx.beginPath();
      ctx.arc(dx + halfWidth, dy + halfHeight, halfWidth, 0, Math.PI * 2, true);
      ctx.fillStyle = "rgba(30, 30, 30, 0.7)";
      ctx.fill();
      if (borderColor) {
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }
    ctx.drawImage(
      layer.imageElement,
      dx + padding,
      dy + padding,
      radius * 2 - padding * 2,
      radius * 2 - padding * 2
    );
  },
});
