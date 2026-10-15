const book = document.getElementById('book');
const fontControls = document.querySelectorAll('.font-size');

for (const control of fontControls) {
    control.addEventListener('click', (event) => {
        event.preventDefault();

        // Убираем активность у всех кнопок размера
        fontControls.forEach((item) => {
            item.classList.remove('font-size_active');
        });

        // Делаем активной нажатую кнопку
        control.classList.add('font-size_active');

        // Убираем предыдущие классы размера у книги
        book.classList.remove('book_fs-small', 'book_fs-big');

        // Добавляем нужный класс размера
        const size = control.dataset.size;

        if (size === 'small') {
            book.classList.add('book_fs-small');
        }

        if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
}