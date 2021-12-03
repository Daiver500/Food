"use strict"

// вынесли функцию, чтобы применять ее в разных местах

// Функция для отправки данных на сервер

const postData = async (url, data) => {          // внутри функции будет асинхронный код, async и await всегда используются в паре
  const result = await fetch(url, {              // здесь дожидаеся ответа await 
    method: "POST",                          // отправляем информацию
      headers: {
        "Content-type": "application/json "       //заголовки нужны для отправки JSON
    },
    body: data                                  // фукнцию postData можно испольоваться как универсальную с различными аргументами
  });

  return await result.json()
}

// Функция для получения данных с сервера

const getData = async (url) => {          // внутри функции будет асинхронный код, async и await всегда используются в паре, в данной строке получаем информацию
  const result = await fetch(url);
  
  if (!result.ok)           {             // проверяем прошел ли запрос
    throw new Error (`Could not fetch ${url}, status: ${result.status}`);                  // выкидываем ошибку
  }              
  return await result.json ()
}

// window.server = {          //тоже самое, что и ниже с export (это вариант 1)
//  postData
// }

export {postData};
export {getData};