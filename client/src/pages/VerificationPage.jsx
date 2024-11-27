// src/pages/VerificationPage.jsx
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const VerificationPage = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">장소 검증</h1>
        <p className="text-gray-600">
          다른 사용자들이 등록한 장소 정보를 검증하고 개선하는데 도움을 주세요.
        </p>
      </div>

      {/* 검증 대기 목록 */}
      <div className="space-y-4">
        {/* 검증 카드 */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">귀멸의 칼날</h3>
                <p className="mt-1 text-sm text-gray-600">무겐열차</p>
              </div>
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                검증 대기중
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">주소:</span> 후쿠오카현 키타큐슈시
                모지구
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">설명:</span> 영화에 등장하는
                무겐열차의 모티브가 된 장소입니다.
              </p>
            </div>

            <div className="flex justify-end space-x-4">
              <button className="inline-flex items-center text-green-600 hover:text-green-700">
                <CheckCircleIcon className="h-5 w-5 mr-1" />
                승인
              </button>
              <button className="inline-flex items-center text-red-600 hover:text-red-700">
                <XCircleIcon className="h-5 w-5 mr-1" />
                거절
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
