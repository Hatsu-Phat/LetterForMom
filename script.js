document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    const letterPopup = document.getElementById('letter-popup');
    const closeButton = document.querySelector('.close-button');

    // Mở phong bì và hiển thị pop-up
    envelope.addEventListener('click', () => {
        envelope.classList.add('open'); // Mở nắp phong bì
        setTimeout(() => {
            letterPopup.classList.add('active'); // Hiển thị pop-up sau khi nắp mở một chút
        }, 300); // Khoảng thời gian để nắp bắt đầu mở
    });

    // Đóng pop-up và đóng phong bì
    closeButton.addEventListener('click', () => {
        letterPopup.classList.remove('active'); // Ẩn pop-up
        setTimeout(() => {
            envelope.classList.remove('open'); // Đóng nắp phong bì sau khi pop-up ẩn
        }, 300); // Khoảng thời gian để pop-up bắt đầu ẩn
    });

    // Đóng pop-up khi click ra ngoài (trên lớp overlay)
    letterPopup.addEventListener('click', (event) => {
        if (event.target === letterPopup) { // Chỉ khi click trực tiếp vào overlay
            letterPopup.classList.remove('active');
            setTimeout(() => {
                envelope.classList.remove('open');
            }, 300);
        }
    });
});