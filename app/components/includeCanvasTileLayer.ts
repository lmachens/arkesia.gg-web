import L from "leaflet";

export default function includeCanvasTileLayer() {
  L.TileLayer.include({
    _delays: {},
    _delaysForZoom: null,
    createCanvas: function (
      tile: HTMLCanvasElement,
      coords: L.Coords,
      done: (error: unknown | undefined, tile: HTMLCanvasElement) => void
    ) {
      let err: unknown | undefined;
      const ctx = tile.getContext("2d");
      const { doubleSize } = this.options;

      const { x: width, y: height } = this.getTileSize();
      tile.width = doubleSize ? width * 2 : width;
      tile.height = doubleSize ? height * 2 : height;

      const img = new Image();
      img.onload = () => {
        try {
          if (ctx) {
            ctx.drawImage(img, 0, 0);
          }
        } catch (e) {
          err = e;
        } finally {
          done(err, tile);
        }
      };
      const tileZoom = this._getZoomForUrl();
      img.src = isNaN(tileZoom) ? "" : this.getTileUrl(coords);
      img.crossOrigin = "anonymous";
    },
    createTile: function (
      coords: L.Coords,
      done: (error: unknown | undefined, tile: HTMLCanvasElement) => void
    ) {
      const { timeout } = this.options;
      const { z: zoom } = coords;
      const tile = document.createElement("canvas");

      if (timeout) {
        if (zoom !== this._delaysForZoom) {
          this._clearDelaysForZoom();
          this._delaysForZoom = zoom;
        }

        if (!this._delays[zoom]) this._delays[zoom] = [];

        this._delays[zoom].push(
          setTimeout(() => {
            this.createCanvas(tile, coords, done);
          }, timeout)
        );
      } else {
        this.createCanvas(tile, coords, done);
      }

      return tile;
    },
    _clearDelaysForZoom: function () {
      const prevZoom = this._delaysForZoom;
      const delays = this._delays[prevZoom];
      if (!delays) return;

      delays.forEach((delay: number, index: number) => {
        clearTimeout(delay);
        delete delays[index];
      });

      delete this._delays[prevZoom];
    },
  });
}
