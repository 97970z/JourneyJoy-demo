// src/pages/HomePage.jsx
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="relative isolate">
      {/* Hero 섹션 */}
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              미디어 속 장소를 현실에서 만나보세요
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              전 세계 영화, 드라마, 애니메이션 속 장소들을 찾아보고, 직접
              방문하여 특별한 추억을 만들어보세요.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/search" className="btn btn-primary">
                장소 찾아보기
              </Link>
              <Link to="/add-location" className="btn btn-secondary">
                장소 등록하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
