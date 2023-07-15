import React from "react";
import GoogleMapReact from "google-map-react";
import { Container } from "components/container";
import { useSelector } from "react-redux";
import { RootState } from "store";

const DisplayTextContainer = ({ text }: any) => <Container>{text}</Container>;

export default function GoogleMap() {
  const { data } = useSelector((state: RootState) => state.apiInfo);
  const defaultProps = {
    center: {
      lat: 6.100367,
      lng: 50.779729,
    },
    zoom: 2,
  };
  return (
    <Container className="w-full h-[250px] rounded-[10px] overflow-hidden">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </Container>
  );
}
