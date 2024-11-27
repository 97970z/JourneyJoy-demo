// src/pages/SearchPage.jsx
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import GoogleMapWrapper from "../components/map/GoogleMap";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mediaType, setMediaType] = useState("all");

  // 테스트용 위치 데이터
  const testLocations = [
    {
      id: 1,
      lat: 35.6762,
      lng: 139.6503,
      mediaTitle: "귀멸의 칼날",
      locationName: "무겐열차",
    },
    {
      id: 2,
      lat: 35.6832,
      lng: 139.6652,
      mediaTitle: "너의 이름은",
      locationName: "스가 신사",
    },
  ];

  const handleMarkerClick = (location) => {
    console.log("Marker clicked:", location);
  };

  return (
    <div className="space-y-8">
      {/* 검색 헤더 */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">장소 검색</h1>
        <p className="text-gray-600">
          영화, 드라마, 애니메이션 속 장소를 찾아보세요.
        </p>
      </div>

      {/* 검색 필터 */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="미디어 제목이나 장소를 검색해보세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10"
          />
        </div>

        <select
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
          className="input-field"
        >
          <option value="all">전체</option>
          <option value="movie">영화</option>
          <option value="drama">드라마</option>
          <option value="animation">애니메이션</option>
        </select>
      </div>

      {/* 검색 결과 및 지도 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 검색 결과 목록 */}
        <div className="space-y-4">
          {testLocations.map((location) => (
            <div
              key={location.id}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <h3 className="font-semibold text-gray-900">
                {location.mediaTitle}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {location.locationName}
              </p>
            </div>
          ))}
        </div>

        {/* 지도 */}
        <div className="sticky top-4">
          <GoogleMapWrapper
            markers={testLocations}
            height="calc(100vh - 200px)"
            onMarkerClick={handleMarkerClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
