
Готовая версия лежит на http://anadeatesttask.surge.sh, немного намудрил со стилями)
Буду рад максимальному фидбеку.

##

Задание:

Реализовать приложение “Заметки”. Стандартное CRUD приложение, которое отображает на главной странице список title-ов всех заметок в базе. С возможностью их подробного просмотра (title + description), удаления, редактирования, добавления новых. И поиска по уже существующим. Минималистичный responsive design. Браузеры от IE10+.

СТЭК 1. React/Redux 2. ES6 3. webpack 4. SASS 5. Бэкэнд на свое усмотрение (например Firebase или node+mySQL (раз уже есть опыт)) 6. Все что еще считает нужным.

##

Обновлено: 

Хорошо:
- Задание выполнено, все требования соблюдены
- Есть понимание принципов JS 

Нехорошо:
- Нет обработки ошибок соединения (Пропал интернет и т.д.). К примеру удаление происходит не дожидаясь ответа от сервера, в таком случае, если с сервера не прийдет ответ об успешном удалении, нужно уведомить пользователя что удалить заметку не удалось и вернуть её обратно в список. Либо же удалять после ответа с сервера.
- Нет сообщения о валидации
- В идеале Actions должны возвращать простые объекты, а выполнение запросов должно происходить в middlewares. Советую ознакомиться с: http://redux.js.org/docs/api/bindActionCreators.html http://redux.js.org/docs/advanced/AsyncActions.html
https://github.com/gaearon/redux-thunk
- В компонентах не описаны propTypes
- Метод Object.keys возвращает ключи только из самого объекта и не трогает ключи прототипов, поэтому проверки NotesList:29 и NotesList:39 неактуальны, плюс к тому же нужно всегда возвращать значение в map и filter https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
- NotesInfo:68 Было бы лучше переиспользовать компонент NotesForm и адаптировать его для редактирования или в случае если это невозможно, создать новый компонент специально для формы редактирования.
