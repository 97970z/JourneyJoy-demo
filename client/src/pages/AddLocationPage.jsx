// src/pages/AddLocationPage.jsx
import { useState } from "react";
import LocationPicker from "../components/map/LocationPicker";

const AddLocationPage = () => {
  const [formData, setFormData] = useState({
    mediaTitle: "",
    mediaType: "movie",
    locationName: "",
    address: "",
    description: "",
    coordinates: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLocationSelect = (position) => {
    setFormData((prev) => ({
      ...prev,
      coordinates: position,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: API 연동
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">장소 등록</h1>
        <p className="text-gray-600">
          새로운 미디어 촬영 장소나 배경이 된 장소를 등록해주세요.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 미디어 정보 섹션 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">미디어 정보</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              미디어 제목
            </label>
            <input
              type="text"
              name="mediaTitle"
              value={formData.mediaTitle}
              onChange={handleChange}
              className="mt-1 input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              미디어 타입
            </label>
            <select
              name="mediaType"
              value={formData.mediaType}
              onChange={handleChange}
              className="mt-1 input-field"
              required
            >
              <option value="movie">영화</option>
              <option value="drama">드라마</option>
              <option value="animation">애니메이션</option>
            </select>
          </div>
        </div>

        {/* 장소 정보 섹션 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">장소 정보</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              장소명
            </label>
            <input
              type="text"
              name="locationName"
              value={formData.locationName}
              onChange={handleChange}
              className="mt-1 input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              주소
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              장소 설명
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="mt-1 input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              위치 선택
            </label>
            <LocationPicker onLocationSelect={handleLocationSelect} />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          장소 등록하기
        </button>
      </form>
    </div>
  );
};

export default AddLocationPage;
