// step1 요구사항 구현을 위한 전략
// TODO 메뉴 추가
// - [x] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - [x] 메뉴의 이름을 입력 받고 클릭버튼으로 입력으로 추가한다.
// - [x] 추가되는 메뉴의 마크업은 ul태그 안에 삽입한다.
// - [x] 총 메뉴 갯수를 count 하여 상단에 보여준다.
// - [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// - [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.

function App() {
  const $ = (selector) => document.querySelector(selector);

  const addMenu = () => {
    const espressoMenuName = $("#espresso-menu-name").value;

    if (espressoMenuName === "") {
      alert("값을 입력하세요");
      return;
    }

    const menuTemplate = (espressoMenuName) => {
      return `
        <li class="menu-list-item d-flex items-center py-2">
          <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
          <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
          >
            수정
          </button>
          <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
          >
            삭제
          </button>
        </li>
        `;
    };

    $("#espresso-menu-list").insertAdjacentHTML(
      "beforeend",
      menuTemplate(espressoMenuName)
    );

    // li의 개수 파악
    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
    $(".menu-count").innerText = `총 ${menuCount}개`;

    // <span class="mr-2 mt-4 menu-count">총 0개</span>

    $("#espresso-menu-name").value = "";
  };

  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // 키프레스 이벤트는 사용자가 키보드를 입력한 값을 추적해주는 이벤트이다
  // 따라서 이벤트 입력값 하나하나를 콘솔에 찍을 수 있음(엔터도 마찬가지!)

  $("#espresso-menu-submit-button").addEventListener("click", (e) => {
    addMenu();
  });
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
      return;
    }
    addMenu();
  });
}

App();
