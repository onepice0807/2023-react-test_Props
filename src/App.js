import "./App.css";
import Book from "./Component/Book";

function App() {
  const kyoboBooks = [
    {
      id: 0,
      productName: "일론 머스크",
      discountRate: "10",
      consumerPrice: "38,000원",
      sellingPrice: "34,200원",
      productImage:
        "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791171170418.jpg",
      authorTranslator: "안진환 번역",
      originalAuthor: "월터 아이작슨 저자(글)",
      prodIntroduction:
        "천재인가 몽상가인가, 영웅인가 사기꾼인가? 수많은 논란 속에서도 1%의 가능성에 모든 걸 걸며 인류의 미래를 바꾸는 이 시대 최고의 혁신가, 일론 머스크의 모든 것!",
    },
    {
      id: 1,
      productName: "일본전산 이야기",
      discountRate: "10",
      consumerPrice: "16,000원",
      sellingPrice: "14,400원",
      productImage:
        "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791165346935.jpg",
      authorTranslator: "국내서적",
      originalAuthor: "김성호 저자(글)",
      prodIntroduction:
        "난 15년 동안 수많은 기업의 경영인들은 물론이고 자기계발에 힘쓰는 사람들에게 큰 공감을 끌어낸 《일본전산 이야기》가 ‘50만 부 돌파 리커버’로 새롭게 출간되었다. 따라가기 힘들 정도로 쉴 새 없이 바뀌는 비즈니스의 세계에서 일본전산과 나가모리 시게노부 회장의 이야기가 15년이 넘는 시간 동안 여전히 신뢰받으며 읽히는 이유는 무엇일까?",
    },
    {
      id: 2,
      productName: "일의 격",
      discountRate: "10",
      consumerPrice: "18,000원",
      sellingPrice: "16,200원",
      productImage:
        "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791190276023.jpg",
      authorTranslator: "국내서적",
      originalAuthor: "신수정 저자(글)",
      prodIntroduction:
        "천재인가 몽상가인가, 영웅인가 사기꾼인가? 수많은 논란 속에서도 1%의 가능성에 모든 걸 걸며 인류의 미래를 바꾸는 이 시대 최고의 혁신가, 일론 머스크의 모든 것!",
    },
  ];
  return (
    <div className="App">
      <h1>Kyobo Books List</h1>
      <div className="KyoboBooksList">
        {kyoboBooks.map((book) => (
          <Book
            key={book.productId}
            productName={book.productName}
            productImage={book.productImage}
            sellingPrice={book.sellingPrice}
            originalAuthor={book.originalAuthor}
            prodIntroduction={book.prodIntroduction}
            discountRate={book.discountRate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
