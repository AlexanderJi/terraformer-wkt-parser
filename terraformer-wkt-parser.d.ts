export = WKT;
declare namespace WKT {
    // @ts-ignore
    export function parse(wkt: string): GeoJSON.GeometryObject;
    // @ts-ignore
    export function convert(geoJSON: GeoJSON.GeometryObject): string;
}
