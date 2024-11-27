/* eslint-disable react/prop-types */
// src/components/map/LocationPicker.jsx
import { useState, useRef, useEffect } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MapComponent = ({
  center,
  zoom,
  onLocationSelect,
  selectedPosition,
  style = { height: "500px", width: "100%" },
}) => {
  const ref = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

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

      // 클릭 이벤트 리스너 추가
      mapRef.current.addListener("click", (e) => {
        const position = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        };
        onLocationSelect(position);
      });
    }
  }, [center, zoom, onLocationSelect]);

  // 선택된 위치에 마커 표시
  useEffect(() => {
    if (!mapRef.current || !selectedPosition) return;

    // 기존 마커 제거
    if (markerRef.current) {
      markerRef.current.setMap(null);
    }

    // 새 마커 생성
    markerRef.current = new window.google.maps.Marker({
      position: selectedPosition,
      map: mapRef.current,
      animation: window.google.maps.Animation.DROP,
    });

    // 지도 중심 이동
    mapRef.current.panTo(selectedPosition);
  }, [selectedPosition]);

  return <div ref={ref} style={style} className="rounded-lg" />;
};

const LoadingComponent = () => (
  <div className="flex items-center justify-center h-full bg-gray-100">
    <div className="text-gray-600">Loading...</div>
  </div>
);

const LocationPicker = ({ onLocationSelect }) => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleLocationSelect = (position) => {
    setSelectedPosition(position);
    onLocationSelect(position);
  };

  return (
    <div className="space-y-4">
      <Wrapper
        apiKey={GOOGLE_MAPS_API_KEY}
        render={(status) => {
          if (status === "LOADING") return <LoadingComponent />;
          if (status === "FAILURE") return <div>Failed to load map</div>;
          return (
            <MapComponent
              center={{ lat: 35.6762, lng: 139.6503 }}
              zoom={13}
              onLocationSelect={handleLocationSelect}
              selectedPosition={selectedPosition}
            />
          );
        }}
      />
      {selectedPosition && (
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-700">선택된 위치:</h3>
          <p className="text-sm text-gray-600 mt-1">
            위도: {selectedPosition.lat.toFixed(6)}, 경도:{" "}
            {selectedPosition.lng.toFixed(6)}
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationPicker;
