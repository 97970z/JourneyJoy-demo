// src/config/maps.js
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const defaultCenter = {
  lat: 35.6762, // 도쿄 중심부 좌표
  lng: 139.6503,
};

export const defaultMapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: true,
};
