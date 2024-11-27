/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/map/GoogleMap.jsx
import { Wrapper } from "@googlemaps/react-wrapper";
import { useRef, useEffect, useState, useCallback } from "react";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const LoadingComponent = () => (
  <div className="flex items-center justify-center h-full bg-gray-100">
    <div className="text-gray-600">Loading...</div>
  </div>
);

const ErrorComponent = ({ error }) => (
  <div className="flex items-center justify-center h-full bg-red-50">
    <div className="text-red-600">Error: {error.message}</div>
  </div>
);

const MapComponent = ({
  center,
  zoom,
  markers = [],
  onMarkerClick,
  style = { height: "400px", width: "100%" },
}) => {
  const ref = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  // 지도 초기화
  useEffect(() => {
    if (ref.current && !mapRef.current) {
      mapRef.current = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
      });
    }
  }, [center, zoom]);

  // 마커 업데이트
  useEffect(() => {
    if (!mapRef.current) return;

    // 기존 마커 제거
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    // 새 마커 생성
    markers.forEach((location) => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: Number(location.lat),
          lng: Number(location.lng),
        },
        map: mapRef.current,
        title: location.mediaTitle,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-2">
            <h3 class="font-semibold">${location.mediaTitle}</h3>
            <p class="text-sm text-gray-600">${location.locationName}</p>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map: mapRef.current,
        });
        onMarkerClick?.(location);
      });

      markersRef.current.push(marker);
    });

    return () => {
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];
    };
  }, [markers, onMarkerClick]);

  return <div ref={ref} style={style} className="rounded-lg" />;
};

const GoogleMapWrapper = ({
  markers = [],
  center = { lat: 35.6762, lng: 139.6503 },
  zoom = 13,
  height = "400px",
  onMarkerClick,
}) => {
  const render = useCallback(
    (status) => {
      switch (status) {
        case "LOADING":
          return <LoadingComponent />;
        case "FAILURE":
          return (
            <ErrorComponent error={new Error("Failed to load Google Maps")} />
          );
        case "SUCCESS":
          return (
            <MapComponent
              center={center}
              zoom={zoom}
              markers={markers}
              onMarkerClick={onMarkerClick}
              style={{ height, width: "100%" }}
            />
          );
        default:
          return <LoadingComponent />;
      }
    },
    [center, zoom, markers, onMarkerClick, height]
  );

  return <Wrapper apiKey={GOOGLE_MAPS_API_KEY} render={render} />;
};

export default GoogleMapWrapper;
