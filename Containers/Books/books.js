import React, { useState } from "react";
import BooksWrapper from "../../Wrappers/booksWrapper";

const Books = ({ data }) => {
  const [a, setA] = useState(false);
  const [datas, setDatas] = useState();

  const info = (book_uri) => {
    setA(!a);
    setDatas(data.results.books.filter((v) => v.book_uri === book_uri)[0]);
    console.log(datas);
  };

  const backBook = () => {
    setA(!a);
  };
  return (
    <BooksWrapper>
      <div className="container py-3">
        {a ? (
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4">
              <div>
                <div className="h-100 p-1">
                  <img
                    style={{ objectFit: "cover" }}
                    src={datas.book_image}
                    alt="rasm"
                    className="w-100 h-75"
                  />
                </div>
                <p>{datas.title}</p>
              </div>
            </div>
            <button className="btn btn-primary" onClick={backBook}>
              Back
            </button>
          </div>
        ) : (
          <div className="row">
            {data.results.books.map((value, index) => {
              return (
                <div className="col-lg-3" key={index}>
                  <div onClick={() => info(value.book_uri)}>
                    <a>
                      <div className="rounded shadow">
                        <img
                          className="w-100 books_img"
                          src={value.book_image}
                          alt="rasm"
                        />
                        <p>{value.title}</p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </BooksWrapper>
  );
};

export default Books;
