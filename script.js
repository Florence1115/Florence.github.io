document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-writing-mode');
    const novelBody = document.getElementById('novel-body');

    // ボタンがクリックされたときの処理
    toggleButton.addEventListener('click', function () {
        // もし現在「横書き（horizontal-mode）」なら
        if (novelBody.classList.contains('horizontal-mode')) {
            novelBody.classList.remove('horizontal-mode');
            novelBody.classList.add('vertical-mode');
            toggleButton.textContent = '横書きで読む ⇄';
        } 
        // もし現在「縦書き（vertical-mode）」なら
        else {
            novelBody.classList.remove('vertical-mode');
            novelBody.classList.add('horizontal-mode');
            toggleButton.textContent = '縦書きで読む ⇄';
        }
    });
});
