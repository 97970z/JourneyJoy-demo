// src/components/layout/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* 로고 및 설명 */}
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary-600">
                JourneyJoy
              </span>
            </Link>
            <p className="text-base text-gray-500">
              미디어 속 장소를 현실에서 만나보세요.
            </p>
          </div>

          {/* 네비게이션 링크 */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">서비스</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/search"
                      className="text-base text-gray-500 hover:text-primary-600"
                    >
                      장소 검색
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add-location"
                      className="text-base text-gray-500 hover:text-primary-600"
                    >
                      장소 등록
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/verify"
                      className="text-base text-gray-500 hover:text-primary-600"
                    >
                      장소 검증
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900">정보</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/about"
                      className="text-base text-gray-500 hover:text-primary-600"
                    >
                      소개
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-base text-gray-500 hover:text-primary-600"
                    >
                      개인정보처리방침
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 카피라이트 */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 JourneyJoy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
